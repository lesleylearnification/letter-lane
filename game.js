const rounds = [
  { answer: "CAT", distractor: "HAT", picture: "🐱", label: "cat", cheer: "Meow-wow! You found CAT!" },
  { answer: "DOG", distractor: "DIG", picture: "🐶", label: "dog", cheer: "Woof-hoo! D-O-G spells DOG!" },
  { answer: "SUN", distractor: "RUN", picture: "☀️", label: "sun", cheer: "You made the SUN shine!" },
  { answer: "PIG", distractor: "BIG", picture: "🐷", label: "pig", cheer: "Oink-tastic! You found PIG!" },
  { answer: "HEN", distractor: "PEN", picture: "🐔", label: "hen", cheer: "Cluck-cluck hooray! HEN!" },
  { answer: "CAR", distractor: "CAN", picture: "🚗", label: "car", cheer: "Beep-beep! You spelled CAR!" },
  { answer: "LOG", distractor: "LEG", picture: "🪵", label: "log", cheer: "You rolled right into LOG!" },
  { answer: "CUP", distractor: "PUP", picture: "🥤", label: "cup", cheer: "Sip-sip hooray! CUP!" },
  { answer: "CAP", distractor: "MAP", picture: "🧢", label: "cap", cheer: "Hat's amazing! You found CAP!" },
  { answer: "RAT", distractor: "BAT", picture: "🐀", label: "rat", cheer: "Squeak-squeak! R-A-T spells RAT!" }
];

const state = {
  roundIndex: 0,
  completed: 0,
  activeLane: null,
  selectedCount: 0,
  locked: false,
  badges: JSON.parse(localStorage.getItem("letterLaneBadges") || "[]")
};

const els = {
  lanes: document.getElementById("lanes"),
  promptWord: document.getElementById("promptWord"),
  nounPicture: document.getElementById("nounPicture"),
  characterSpeech: document.getElementById("characterSpeech"),
  letterSlots: document.getElementById("letterSlots"),
  feedbackText: document.getElementById("feedbackText"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  progressTrack: document.querySelector(".progress-track"),
  flowerTrail: document.getElementById("flowerTrail"),
  nextButton: document.getElementById("nextButton"),
  hearWordButton: document.getElementById("hearWordButton"),
  celebrationBits: document.getElementById("celebrationBits"),
  inventoryButton: document.getElementById("inventoryButton"),
  inventoryPanel: document.getElementById("inventoryPanel"),
  closeInventoryButton: document.getElementById("closeInventoryButton"),
  inventoryContents: document.getElementById("inventoryContents"),
  badgeCount: document.getElementById("badgeCount"),
  levelComplete: document.getElementById("levelComplete"),
  collectBadgeButton: document.getElementById("collectBadgeButton"),
  playAgainButton: document.getElementById("playAgainButton"),
  badgeStatus: document.getElementById("badgeStatus"),
  srStatus: document.getElementById("srStatus")
};

function shufflePair(a, b) {
  return Math.random() > 0.5 ? [a, b] : [b, a];
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.78;
  utterance.pitch = 1.15;
  window.speechSynthesis.speak(utterance);
}

function buildSlots(length) {
  els.letterSlots.innerHTML = "";
  for (let i = 0; i < length; i += 1) {
    const slot = document.createElement("div");
    slot.className = "letter-slot";
    slot.textContent = "_";
    els.letterSlots.appendChild(slot);
  }
}

function buildProgress() {
  els.flowerTrail.innerHTML = "";
  rounds.forEach((_, index) => {
    const marker = document.createElement("span");
    marker.textContent = index < state.completed ? "🌼" : index === state.completed ? "🐾" : "·";
    els.flowerTrail.appendChild(marker);
  });
  els.progressText.textContent = `${Math.min(state.completed + 1, 10)} of 10`;
  els.progressFill.style.width = `${(state.completed / rounds.length) * 100}%`;
  els.progressTrack.setAttribute("aria-valuenow", String(state.completed));
}

function createLane(word, laneNumber, theme) {
  const lane = document.createElement("div");
  lane.className = "lane";
  lane.dataset.word = word;
  lane.style.setProperty("--lane", theme.main);
  lane.style.setProperty("--lane-dark", theme.dark);
  lane.style.setProperty("--lane-soft", theme.soft);

  const label = document.createElement("div");
  label.className = "lane-label";
  label.innerHTML = `Lane <span>${laneNumber}</span>`;

  const row = document.createElement("div");
  row.className = "letter-row";

  [...word].forEach((letter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-button";
    button.textContent = letter;
    button.setAttribute("aria-label", `Letter ${letter}, step ${index + 1} of ${word.length}, lane ${laneNumber}`);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => chooseLetter(lane, button, index));
    row.appendChild(button);

    if (index < word.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "lane-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";
      row.appendChild(arrow);
    }
  });

  lane.append(label, row);
  return lane;
}

function renderRound() {
  const round = rounds[state.roundIndex];
  state.activeLane = null;
  state.selectedCount = 0;
  state.locked = false;

  els.promptWord.textContent = `${round.label}?`;
  els.nounPicture.textContent = round.picture;
  els.nounPicture.setAttribute("aria-label", round.label);
  els.characterSpeech.textContent = "Can you find my word?";
  els.feedbackText.textContent = "Pick a lane!";
  els.nextButton.hidden = true;
  els.celebrationBits.innerHTML = "";
  els.nounPicture.classList.remove("cheer", "wiggle");

  buildSlots(round.answer.length);
  buildProgress();

  const [first, second] = shufflePair(round.answer, round.distractor);
  els.lanes.innerHTML = "";
  els.lanes.append(
    createLane(first, 1, { main: "#4f7d20", dark: "#2f5613", soft: "#dff0b5" }),
    createLane(second, 2, { main: "#6540a4", dark: "#3f2475", soft: "#e9ddfb" })
  );

  els.srStatus.textContent = `Round ${state.roundIndex + 1}. Find the word ${round.answer}.`;
}

function chooseLetter(lane, button, index) {
  if (state.locked) return;

  const allButtons = [...lane.querySelectorAll(".letter-button")];

  if (state.activeLane && state.activeLane !== lane) {
    els.feedbackText.textContent = "Stay on one lane!";
    els.characterSpeech.textContent = "Keep following the same path.";
    lane.classList.add("wrong-lane");
    setTimeout(() => lane.classList.remove("wrong-lane"), 500);
    return;
  }

  if (index !== state.selectedCount) {
    els.feedbackText.textContent = "Start on the left!";
    els.characterSpeech.textContent = "Tap the next letter in the lane.";
    return;
  }

  state.activeLane = lane;
  state.selectedCount += 1;
  button.setAttribute("aria-pressed", "true");
  button.disabled = true;

  const slots = [...els.letterSlots.children];
  slots[index].textContent = button.textContent;
  els.feedbackText.textContent = index < allButtons.length - 1 ? "Keep going!" : "Word complete!";

  [...els.lanes.children].forEach(otherLane => {
    if (otherLane !== lane) {
      otherLane.querySelectorAll("button").forEach(otherButton => {
        otherButton.disabled = true;
      });
    }
  });

  if (state.selectedCount === allButtons.length) {
    evaluateLane(lane.dataset.word, lane);
  }
}

function evaluateLane(word, lane) {
  state.locked = true;
  const round = rounds[state.roundIndex];
  els.lanes.querySelectorAll("button").forEach(button => { button.disabled = true; });

  if (word === round.answer) {
    lane.classList.add("correct-lane");
    els.feedbackText.textContent = "You found it!";
    els.characterSpeech.textContent = round.cheer;
    els.nounPicture.classList.add("cheer");
    createCelebration();
    speak(round.cheer);
    state.completed += 1;
    buildProgress();
    els.nextButton.hidden = false;
    els.nextButton.textContent = state.completed === rounds.length ? "See my badge!" : "Next friend";
    els.nextButton.focus();
    els.srStatus.textContent = `${round.answer} is correct. ${round.cheer}`;
  } else {
    lane.classList.add("wrong-lane");
    els.feedbackText.textContent = "Almost! Look again.";
    els.characterSpeech.textContent = `${word} is a real word, but it is not ${round.label}. Try the other lane!`;
    els.nounPicture.classList.add("wiggle");
    speak(`Good try. ${word} is not ${round.label}. Try the other lane.`);
    els.srStatus.textContent = `${word} is not the matching word. Try the other lane.`;
    setTimeout(renderRound, 1800);
  }
}

function createCelebration() {
  const bits = ["⭐", "✨", "🌼", "💛", "🎉", "🐾"];
  for (let i = 0; i < 12; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent = bits[i % bits.length];
    spark.style.left = `${40 + Math.random() * 20}%`;
    spark.style.top = `${40 + Math.random() * 20}%`;
    spark.style.setProperty("--dx", `${-120 + Math.random() * 240}px`);
    spark.style.setProperty("--dy", `${-110 + Math.random() * 190}px`);
    els.celebrationBits.appendChild(spark);
  }
}

function nextRound() {
  if (state.completed >= rounds.length) {
    showLevelComplete();
    return;
  }
  state.roundIndex += 1;
  renderRound();
}

function showLevelComplete() {
  els.levelComplete.hidden = false;
  const alreadyEarned = state.badges.some(badge => badge.id === "cozy-neighborhood");
  els.badgeStatus.textContent = alreadyEarned
    ? "This badge is already safe in your backpack."
    : "A new badge is ready for your backpack.";
  els.collectBadgeButton.textContent = alreadyEarned ? "Badge collected!" : "Add badge to backpack";
  els.collectBadgeButton.disabled = alreadyEarned;
  els.collectBadgeButton.focus();
  speak("Level complete! You earned the Letter Lane Explorer badge!");
}

function collectBadge() {
  if (!state.badges.some(badge => badge.id === "cozy-neighborhood")) {
    state.badges.push({
      id: "cozy-neighborhood",
      title: "Letter Lane Explorer",
      description: "Completed the Cozy Neighborhood",
      icon: "🏡"
    });
    localStorage.setItem("letterLaneBadges", JSON.stringify(state.badges));
  }
  els.collectBadgeButton.textContent = "Badge collected!";
  els.collectBadgeButton.disabled = true;
  els.badgeStatus.textContent = "Your new badge is in your backpack!";
  updateInventory();
}

function updateInventory() {
  els.badgeCount.textContent = String(state.badges.length);
  els.badgeCount.setAttribute("aria-label", `${state.badges.length} badges`);
  els.inventoryContents.innerHTML = "";

  if (state.badges.length === 0) {
    els.inventoryContents.innerHTML = '<div class="empty-inventory">Your backpack is waiting for its first badge.</div>';
    return;
  }

  state.badges.forEach(badge => {
    const card = document.createElement("div");
    card.className = "badge-card";
    card.innerHTML = `
      <div class="badge-mini" aria-hidden="true">${badge.icon}</div>
      <div><strong>${badge.title}</strong><br><span>${badge.description}</span></div>
    `;
    els.inventoryContents.appendChild(card);
  });
}

function resetGame() {
  state.roundIndex = 0;
  state.completed = 0;
  els.levelComplete.hidden = true;
  renderRound();
}

function toggleInventory(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : els.inventoryPanel.hidden;
  els.inventoryPanel.hidden = !shouldOpen;
  els.inventoryButton.setAttribute("aria-expanded", String(shouldOpen));
  if (shouldOpen) els.closeInventoryButton.focus();
}

els.nextButton.addEventListener("click", nextRound);
els.hearWordButton.addEventListener("click", () => {
  const round = rounds[state.roundIndex];
  speak(round.answer.split("").join(". ") + `. ${round.answer}.`);
});
els.inventoryButton.addEventListener("click", () => toggleInventory());
els.closeInventoryButton.addEventListener("click", () => {
  toggleInventory(false);
  els.inventoryButton.focus();
});
els.collectBadgeButton.addEventListener("click", collectBadge);
els.playAgainButton.addEventListener("click", resetGame);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !els.inventoryPanel.hidden) {
    toggleInventory(false);
    els.inventoryButton.focus();
  }
});

updateInventory();
renderRound();
