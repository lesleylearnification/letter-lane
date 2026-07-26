(() => {
  "use strict";

  const rounds = [
    {
      word: "CAT",
      distractor: "HAT",
      name: "Clover the Cat",
      image: "assets/images/cat.svg",
      alt: "A cheerful orange cat sitting beside a cottage garden",
      cheer: "You found me! C-A-T spells cat!",
      retry: "That spells hat. I am the cat. Let’s try my lane!"
    },
    {
      word: "DOG",
      distractor: "DIG",
      name: "Daisy the Dog",
      image: "assets/images/dog.svg",
      alt: "A friendly brown dog beside a little blue gate",
      cheer: "Woof-hoo! D-O-G spells dog!",
      retry: "That spells dig. Look for the word dog and try again!"
    },
    {
      word: "SUN",
      distractor: "RUN",
      name: "Sunny the Sun",
      image: "assets/images/sun.svg",
      alt: "A smiling golden sun shining over the neighborhood",
      cheer: "You made my day! S-U-N spells sun!",
      retry: "That spells run. I shine in the sky. Try sun!"
    },
    {
      word: "PIG",
      distractor: "BIG",
      name: "Poppy the Pig",
      image: "assets/images/pig.svg",
      alt: "A rosy pig wearing a tiny flower near a garden fence",
      cheer: "Oink-tastic! P-I-G spells pig!",
      retry: "That spells big. I am a pig. Give my lane another try!"
    },
    {
      word: "HEN",
      distractor: "PEN",
      name: "Hattie the Hen",
      image: "assets/images/hen.svg",
      alt: "A happy red hen standing beside a small wooden coop",
      cheer: "Cluck, cluck, hooray! H-E-N spells hen!",
      retry: "That spells pen. I am the hen. Try again!"
    },
    {
      word: "CAR",
      distractor: "CAN",
      name: "Cora the Car",
      image: "assets/images/car.svg",
      alt: "A cheerful little red car parked on a cozy village lane",
      cheer: "Beep beep! C-A-R spells car!",
      retry: "That spells can. I have wheels. Find car!"
    },
    {
      word: "LOG",
      distractor: "LEG",
      name: "Mossy the Log",
      image: "assets/images/log.svg",
      alt: "A mossy woodland log with a friendly face and tiny mushrooms",
      cheer: "You found the woodland word! L-O-G spells log!",
      retry: "That spells leg. I am a log. Look again!"
    },
    {
      word: "CUP",
      distractor: "PUP",
      name: "Coco the Cup",
      image: "assets/images/cup.svg",
      alt: "A smiling blue cup on a picnic table with flowers nearby",
      cheer: "Sip, sip, hooray! C-U-P spells cup!",
      retry: "That spells pup. I am the cup. Try my word!"
    },
    {
      word: "CAP",
      distractor: "MAP",
      name: "Callie the Cap",
      image: "assets/images/cap.svg",
      alt: "A bright green cap resting on a cottage fence post",
      cheer: "You topped it! C-A-P spells cap!",
      retry: "That spells map. I am a cap. Try again!"
    },
    {
      word: "RAT",
      distractor: "BAT",
      name: "Rory the Rat",
      image: "assets/images/rat.svg",
      alt: "A sweet gray rat holding a berry beside a tiny garden door",
      cheer: "Squeak-tacular! R-A-T spells rat!",
      retry: "That spells bat. I am the rat. Follow my lane!"
    }
  ];

  const BADGE_KEY = "letterLaneExplorerEarned";

  const elements = {
    welcomeScreen: document.getElementById("welcome-screen"),
    gameScreen: document.getElementById("game-screen"),
    startButton: document.getElementById("start-button"),
    progressText: document.getElementById("progress-text"),
    progressTrack: document.getElementById("progress-track"),
    promptText: document.getElementById("prompt-text"),
    lanes: document.getElementById("lanes"),
    wordSlots: document.getElementById("word-slots"),
    neighborFrame: document.getElementById("neighbor-frame"),
    neighborImage: document.getElementById("neighbor-image"),
    neighborName: document.getElementById("neighbor-name"),
    feedbackMessage: document.getElementById("feedback-message"),
    hearWordButton: document.getElementById("hear-word-button"),
    nextButton: document.getElementById("next-button"),
    completionModal: document.getElementById("completion-modal"),
    completionClose: document.getElementById("completion-close"),
    playAgainButton: document.getElementById("play-again-button"),
    viewBackpackButton: document.getElementById("view-backpack-button"),
    badgeStatus: document.getElementById("badge-status"),
    inventoryButton: document.getElementById("inventory-button"),
    inventoryModal: document.getElementById("inventory-modal"),
    inventoryClose: document.getElementById("inventory-close"),
    inventoryContent: document.getElementById("inventory-content"),
    badgeCount: document.getElementById("badge-count")
  };

  let currentRoundIndex = 0;
  let selectedLetters = [];
  let activeLane = null;
  let roundResolved = false;
  let lastFocusedElement = null;

  function hasBadge() {
    try {
      return localStorage.getItem(BADGE_KEY) === "true";
    } catch (error) {
      return false;
    }
  }

  function saveBadge() {
    try {
      localStorage.setItem(BADGE_KEY, "true");
    } catch (error) {
      // The game still works when browser storage is unavailable.
    }
  }

  function updateInventoryButton() {
    const count = hasBadge() ? 1 : 0;
    elements.badgeCount.textContent = String(count);
    elements.badgeCount.setAttribute("aria-label", `${count} badge${count === 1 ? "" : "s"}`);
  }

  function createProgressTrack() {
    elements.progressTrack.replaceChildren();

    rounds.forEach((_, index) => {
      const step = document.createElement("li");
      step.className = "progress-step";
      step.textContent = String(index + 1);

      if (index < currentRoundIndex) {
        step.classList.add("complete");
        step.textContent = "✓";
        step.setAttribute("aria-label", `Friend ${index + 1} complete`);
      } else if (index === currentRoundIndex) {
        step.classList.add("current");
        step.setAttribute("aria-current", "step");
        step.setAttribute("aria-label", `Current friend ${index + 1}`);
      } else {
        step.setAttribute("aria-label", `Friend ${index + 1} not completed`);
      }

      elements.progressTrack.append(step);
    });
  }

  function buildWordSlots(wordLength) {
    elements.wordSlots.replaceChildren();

    for (let index = 0; index < wordLength; index += 1) {
      const slot = document.createElement("span");
      slot.className = "word-slot";
      slot.textContent = selectedLetters[index] || "";
      slot.setAttribute(
        "aria-label",
        selectedLetters[index] ? `Letter ${index + 1}: ${selectedLetters[index]}` : `Letter ${index + 1} empty`
      );
      elements.wordSlots.append(slot);
    }
  }

  function shuffledLaneWords(round) {
    const entries = [
      { word: round.word, correct: true },
      { word: round.distractor, correct: false }
    ];

    return Math.random() < 0.5 ? entries : entries.reverse();
  }

  function createLane(entry, laneIndex) {
    const lane = document.createElement("div");
    lane.className = "lane";
    lane.dataset.word = entry.word;
    lane.dataset.correct = String(entry.correct);
    lane.dataset.tone = laneIndex === 0 ? "green" : "purple";

    const label = document.createElement("div");
    label.className = "lane-label";
    label.innerHTML = `Lane <span>${laneIndex + 1}</span>`;

    const letterRow = document.createElement("div");
    letterRow.className = "letter-row";

    [...entry.word].forEach((letter, letterIndex) => {
      const button = document.createElement("button");
      button.className = "letter-button";
      button.type = "button";
      button.textContent = letter;
      button.dataset.index = String(letterIndex);
      button.setAttribute("aria-label", `Lane ${laneIndex + 1}, letter ${letterIndex + 1}, ${letter}`);
      button.addEventListener("click", () => handleLetterClick(lane, button, letter, letterIndex));
      letterRow.append(button);
    });

    const end = document.createElement("div");
    end.className = "lane-end";
    end.innerHTML = "<span aria-hidden=\"true\">➜</span>";

    lane.append(label, letterRow, end);
    return lane;
  }

  function renderRound() {
    const round = rounds[currentRoundIndex];

    selectedLetters = [];
    activeLane = null;
    roundResolved = false;

    elements.progressText.textContent = `Friend ${currentRoundIndex + 1} of ${rounds.length}`;
    createProgressTrack();

    elements.promptText.textContent = `${round.word.toLowerCase()}?`;
    elements.neighborImage.src = round.image;
    elements.neighborImage.alt = round.alt;
    elements.neighborName.textContent = round.name;
    elements.feedbackMessage.textContent = "Can you find my word?";
    elements.nextButton.hidden = true;
    elements.neighborFrame.classList.remove("cheer", "encourage");

    buildWordSlots(round.word.length);
    elements.lanes.replaceChildren();

    shuffledLaneWords(round).forEach((entry, index) => {
      elements.lanes.append(createLane(entry, index));
    });

    const firstLetter = elements.lanes.querySelector(".letter-button");
    if (firstLetter) {
      firstLetter.focus();
    }
  }

  function handleLetterClick(lane, button, letter, letterIndex) {
    if (roundResolved) {
      return;
    }

    if (activeLane && activeLane !== lane) {
      elements.feedbackMessage.textContent = "Stay on one lane until you reach the picture.";
      animateNeighbor("encourage");
      return;
    }

    if (letterIndex !== selectedLetters.length) {
      elements.feedbackMessage.textContent =
        selectedLetters.length === 0 ? "Start with the first letter on the left." : "Tap the next letter.";
      animateNeighbor("encourage");
      return;
    }

    activeLane = lane;
    selectedLetters.push(letter);
    button.classList.add("selected");
    button.disabled = true;
    buildWordSlots(lane.dataset.word.length);

    const allLanes = [...elements.lanes.querySelectorAll(".lane")];
    allLanes.forEach((otherLane) => {
      if (otherLane !== lane) {
        otherLane.querySelectorAll(".letter-button").forEach((otherButton) => {
          otherButton.disabled = true;
        });
      }
    });

    if (selectedLetters.length < lane.dataset.word.length) {
      elements.feedbackMessage.textContent = "Great! Keep going toward the picture.";
      const nextButton = lane.querySelector(`.letter-button[data-index="${selectedLetters.length}"]`);
      if (nextButton) {
        nextButton.focus();
      }
      return;
    }

    finishAttempt(lane);
  }

  function finishAttempt(lane) {
    const round = rounds[currentRoundIndex];
    const isCorrect = lane.dataset.correct === "true";

    roundResolved = true;
    elements.lanes.querySelectorAll(".letter-button").forEach((button) => {
      button.disabled = true;
    });

    if (isCorrect) {
      lane.classList.add("correct");
      elements.feedbackMessage.textContent = round.cheer;
      animateNeighbor("cheer");
      speak(`${round.word.split("").join(" ")}. ${round.word.toLowerCase()}.`);
      elements.nextButton.hidden = false;
      elements.nextButton.focus();
    } else {
      lane.classList.add("wrong");
      elements.feedbackMessage.textContent = round.retry;
      animateNeighbor("encourage");
      speak(round.retry);

      window.setTimeout(() => {
        resetCurrentRound();
      }, 1800);
    }
  }

  function resetCurrentRound() {
    selectedLetters = [];
    activeLane = null;
    roundResolved = false;
    elements.feedbackMessage.textContent = "Try the other lane. You can do it!";
    buildWordSlots(rounds[currentRoundIndex].word.length);

    elements.lanes.querySelectorAll(".lane").forEach((lane) => {
      lane.classList.remove("wrong", "correct");
      lane.querySelectorAll(".letter-button").forEach((button) => {
        button.disabled = false;
        button.classList.remove("selected");
      });
    });

    const firstButton = elements.lanes.querySelector(".letter-button");
    if (firstButton) {
      firstButton.focus();
    }
  }

  function animateNeighbor(className) {
    elements.neighborFrame.classList.remove("cheer", "encourage");
    void elements.neighborFrame.offsetWidth;
    elements.neighborFrame.classList.add(className);
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.78;
    utterance.pitch = 1.08;
    window.speechSynthesis.speak(utterance);
  }

  function goToNextRound() {
    if (currentRoundIndex < rounds.length - 1) {
      currentRoundIndex += 1;
      renderRound();
      return;
    }

    completeLevel();
  }

  function completeLevel() {
    saveBadge();
    updateInventoryButton();
    elements.badgeStatus.textContent = hasBadge()
      ? "Your Letter Lane Explorer badge is in your backpack!"
      : "You earned the Letter Lane Explorer badge!";
    openModal(elements.completionModal, elements.completionClose);
    speak("Level complete! You helped every friend find their name!");
  }

  function startGame() {
    currentRoundIndex = 0;
    elements.welcomeScreen.hidden = true;
    elements.gameScreen.hidden = false;
    renderRound();
  }

  function playAgain() {
    closeModal(elements.completionModal);
    currentRoundIndex = 0;
    renderRound();
  }

  function renderInventory() {
    elements.inventoryContent.replaceChildren();

    if (!hasBadge()) {
      const empty = document.createElement("div");
      empty.className = "inventory-empty";
      empty.innerHTML = "<strong>Your backpack is ready!</strong><p>Complete all 10 neighbors to earn your first badge.</p>";
      elements.inventoryContent.append(empty);
      return;
    }

    const badge = document.createElement("div");
    badge.className = "inventory-badge";
    badge.innerHTML = `
      <img src="assets/images/letter-lane-explorer.svg" alt="">
      <div>
        <strong>Letter Lane Explorer</strong>
        <span>Completed the Cozy Neighborhood</span>
      </div>
    `;
    elements.inventoryContent.append(badge);
  }

  function openInventory() {
    renderInventory();
    openModal(elements.inventoryModal, elements.inventoryClose);
  }

  function openModal(modal, focusTarget) {
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => focusTarget.focus(), 0);
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  function handleEscape(event) {
    if (event.key !== "Escape") {
      return;
    }

    if (!elements.inventoryModal.hidden) {
      closeModal(elements.inventoryModal);
    } else if (!elements.completionModal.hidden) {
      closeModal(elements.completionModal);
    }
  }

  elements.startButton.addEventListener("click", startGame);
  elements.hearWordButton.addEventListener("click", () => {
    const round = rounds[currentRoundIndex];
    speak(`${round.word.split("").join(" ")}. ${round.word.toLowerCase()}.`);
  });
  elements.nextButton.addEventListener("click", goToNextRound);
  elements.playAgainButton.addEventListener("click", playAgain);
  elements.completionClose.addEventListener("click", () => closeModal(elements.completionModal));
  elements.viewBackpackButton.addEventListener("click", () => {
    closeModal(elements.completionModal);
    openInventory();
  });
  elements.inventoryButton.addEventListener("click", openInventory);
  elements.inventoryClose.addEventListener("click", () => closeModal(elements.inventoryModal));

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", () => closeModal(elements.completionModal));
  });

  document.querySelectorAll("[data-close-inventory]").forEach((element) => {
    element.addEventListener("click", () => closeModal(elements.inventoryModal));
  });

  document.addEventListener("keydown", handleEscape);

  updateInventoryButton();
  createProgressTrack();
})();
