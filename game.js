(() => {
  "use strict";

  const rounds = [
    {
      word: "CAT",
      distractor: "HAT",
      name: "Clover the Cat",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3EClover%20the%20Cat%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dcecc8%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(80%2065)%22%3E%3Cpath%20d%3D%22M64%2088%20L92%2038%20L118%2089%20Z%22%20fill%3D%22%23d9852f%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M164%2088%20L190%2038%20L218%2091%20Z%22%20fill%3D%22%23d9852f%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22141%22%20cy%3D%22160%22%20rx%3D%22105%22%20ry%3D%2293%22%20fill%3D%22%23e89a3e%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M110%20112%20Q141%2092%20172%20112%22%20fill%3D%22none%22%20stroke%3D%22%239e5c25%22%20stroke-width%3D%229%22%20stroke-linecap%3D%22round%22%2F%3E%3Cellipse%20cx%3D%22104%22%20cy%3D%22153%22%20rx%3D%2215%22%20ry%3D%2221%22%20fill%3D%22%232d2637%22%2F%3E%3Cellipse%20cx%3D%22177%22%20cy%3D%22153%22%20rx%3D%2215%22%20ry%3D%2221%22%20fill%3D%22%232d2637%22%2F%3E%3Ccircle%20cx%3D%2299%22%20cy%3D%22146%22%20r%3D%225%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22172%22%20cy%3D%22146%22%20r%3D%225%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M128%20177%20Q141%20188%20154%20177%20Q141%20165%20128%20177Z%22%20fill%3D%22%23d7656d%22%2F%3E%3Cpath%20d%3D%22M141%20187%20Q140%20207%20120%20210%22%20fill%3D%22none%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M141%20187%20Q142%20207%20162%20210%22%20fill%3D%22none%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M80%20185%20H32%20M82%20198%20H24%20M202%20185%20H250%20M200%20198%20H258%22%20stroke%3D%22%236b4527%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M64%20103%20L86%2065%20L99%20104%22%20fill%3D%22%23f5b7aa%22%2F%3E%3Cpath%20d%3D%22M181%20104%20L194%2065%20L215%20105%22%20fill%3D%22%23f5b7aa%22%2F%3E%3Cpath%20d%3D%22M67%20232%20Q141%20278%20215%20232%22%20fill%3D%22%23fff6e8%22%20opacity%3D%22.9%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A cheerful orange cat sitting beside a cottage garden",
      cheer: "You found me! C-A-T spells cat!",
      retry: "That spells hat. I am the cat. Let’s try my lane!"
    },
    {
      word: "DOG",
      distractor: "DIG",
      name: "Daisy the Dog",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3EDaisy%20the%20Dog%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dcecc8%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(72%2063)%22%3E%3Cpath%20d%3D%22M72%2088%20Q25%2058%2026%20129%20Q28%20171%2076%20174Z%22%20fill%3D%22%238f5a32%22%20stroke%3D%22%235c3b25%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M184%2088%20Q231%2058%20230%20129%20Q228%20171%20180%20174Z%22%20fill%3D%22%238f5a32%22%20stroke%3D%22%235c3b25%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22128%22%20cy%3D%22156%22%20rx%3D%2298%22%20ry%3D%2291%22%20fill%3D%22%23b97943%22%20stroke%3D%22%235c3b25%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M85%20112%20Q128%2088%20171%20112%22%20fill%3D%22%23d7a06c%22%2F%3E%3Cellipse%20cx%3D%2294%22%20cy%3D%22151%22%20rx%3D%2215%22%20ry%3D%2220%22%20fill%3D%22%2328212b%22%2F%3E%3Cellipse%20cx%3D%22162%22%20cy%3D%22151%22%20rx%3D%2215%22%20ry%3D%2220%22%20fill%3D%22%2328212b%22%2F%3E%3Ccircle%20cx%3D%2289%22%20cy%3D%22144%22%20r%3D%225%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22157%22%20cy%3D%22144%22%20r%3D%225%22%20fill%3D%22%23fff%22%2F%3E%3Cellipse%20cx%3D%22128%22%20cy%3D%22184%22%20rx%3D%2242%22%20ry%3D%2234%22%20fill%3D%22%23f4dfc7%22%2F%3E%3Cpath%20d%3D%22M111%20178%20Q128%20191%20145%20178%20Q128%20164%20111%20178Z%22%20fill%3D%22%2333262a%22%2F%3E%3Cpath%20d%3D%22M128%20193%20Q128%20210%20109%20213%22%20fill%3D%22none%22%20stroke%3D%22%235c3b25%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M128%20193%20Q128%20210%20147%20213%22%20fill%3D%22none%22%20stroke%3D%22%235c3b25%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M108%20216%20Q128%20242%20148%20216%22%20fill%3D%22%23db6b7a%22%2F%3E%3Cpath%20d%3D%22M83%20239%20Q128%20269%20173%20239%22%20fill%3D%22%234a78a3%22%2F%3E%3Ccircle%20cx%3D%22128%22%20cy%3D%22248%22%20r%3D%2211%22%20fill%3D%22%23f3c95e%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A friendly brown dog beside a little blue gate",
      cheer: "Woof-hoo! D-O-G spells dog!",
      retry: "That spells dig. Look for the word dog and try again!"
    },
    {
      word: "SUN",
      distractor: "RUN",
      name: "Sunny the Sun",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ESunny%20the%20Sun%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23bfe9ff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23d8efc1%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(50%2045)%22%3E%3Cg%20stroke%3D%22%23c87b14%22%20stroke-width%3D%2214%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M150%2010%20V55%22%2F%3E%3Cpath%20d%3D%22M150%20245%20V290%22%2F%3E%3Cpath%20d%3D%22M10%20150%20H55%22%2F%3E%3Cpath%20d%3D%22M245%20150%20H290%22%2F%3E%3Cpath%20d%3D%22M51%2051%20L82%2082%22%2F%3E%3Cpath%20d%3D%22M218%20218%20L249%20249%22%2F%3E%3Cpath%20d%3D%22M51%20249%20L82%20218%22%2F%3E%3Cpath%20d%3D%22M218%2082%20L249%2051%22%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%22150%22%20r%3D%2292%22%20fill%3D%22%23f4c84c%22%20stroke%3D%22%23b56d15%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22116%22%20cy%3D%22145%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%233b2c32%22%2F%3E%3Cellipse%20cx%3D%22184%22%20cy%3D%22145%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%233b2c32%22%2F%3E%3Ccircle%20cx%3D%22112%22%20cy%3D%22139%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22139%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M113%20183%20Q150%20216%20187%20183%22%20fill%3D%22none%22%20stroke%3D%22%237f4e2e%22%20stroke-width%3D%228%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2290%22%20cy%3D%22178%22%20r%3D%2212%22%20fill%3D%22%23ef9a78%22%20opacity%3D%22.65%22%2F%3E%3Ccircle%20cx%3D%22210%22%20cy%3D%22178%22%20r%3D%2212%22%20fill%3D%22%23ef9a78%22%20opacity%3D%22.65%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A smiling golden sun shining over the neighborhood",
      cheer: "You made my day! S-U-N spells sun!",
      retry: "That spells run. I shine in the sky. Try sun!"
    },
    {
      word: "PIG",
      distractor: "BIG",
      name: "Poppy the Pig",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3EPoppy%20the%20Pig%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e6efc9%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(72%2066)%22%3E%3Cpath%20d%3D%22M72%2099%20Q45%2044%2095%2053%20L112%20103Z%22%20fill%3D%22%23e9a4ac%22%20stroke%3D%22%238f5d63%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M183%2099%20Q210%2044%20160%2053%20L143%20103Z%22%20fill%3D%22%23e9a4ac%22%20stroke%3D%22%238f5d63%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22128%22%20cy%3D%22158%22%20rx%3D%2298%22%20ry%3D%2291%22%20fill%3D%22%23efb1b7%22%20stroke%3D%22%238f5d63%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%2295%22%20cy%3D%22148%22%20rx%3D%2214%22%20ry%3D%2219%22%20fill%3D%22%23352833%22%2F%3E%3Cellipse%20cx%3D%22161%22%20cy%3D%22148%22%20rx%3D%2214%22%20ry%3D%2219%22%20fill%3D%22%23352833%22%2F%3E%3Ccircle%20cx%3D%2290%22%20cy%3D%22142%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22156%22%20cy%3D%22142%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cellipse%20cx%3D%22128%22%20cy%3D%22186%22%20rx%3D%2247%22%20ry%3D%2235%22%20fill%3D%22%23df8e98%22%20stroke%3D%22%238f5d63%22%20stroke-width%3D%226%22%2F%3E%3Cellipse%20cx%3D%22113%22%20cy%3D%22185%22%20rx%3D%226%22%20ry%3D%2210%22%20fill%3D%22%238f5d63%22%2F%3E%3Cellipse%20cx%3D%22143%22%20cy%3D%22185%22%20rx%3D%226%22%20ry%3D%2210%22%20fill%3D%22%238f5d63%22%2F%3E%3Cpath%20d%3D%22M106%20221%20Q128%20239%20150%20221%22%20fill%3D%22none%22%20stroke%3D%22%238f5d63%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%3Cg%20transform%3D%22translate(194%2078)%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%2210%22%20fill%3D%22%23f6d250%22%2F%3E%3Ccircle%20cx%3D%22-12%22%20cy%3D%220%22%20r%3D%229%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%220%22%20r%3D%229%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%220%22%20cy%3D%22-12%22%20r%3D%229%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%220%22%20cy%3D%2212%22%20r%3D%229%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A rosy pig wearing a tiny flower near a garden fence",
      cheer: "Oink-tastic! P-I-G spells pig!",
      retry: "That spells big. I am a pig. Give my lane another try!"
    },
    {
      word: "HEN",
      distractor: "PEN",
      name: "Hattie the Hen",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3EHattie%20the%20Hen%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dcecc8%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(82%2055)%22%3E%3Cellipse%20cx%3D%22123%22%20cy%3D%22176%22%20rx%3D%2291%22%20ry%3D%2291%22%20fill%3D%22%23c95d35%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M76%20122%20Q123%2080%20170%20122%22%20fill%3D%22%23f0d6b0%22%2F%3E%3Ccircle%20cx%3D%22123%22%20cy%3D%22123%22%20r%3D%2266%22%20fill%3D%22%23f4dfba%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%227%22%2F%3E%3Cpath%20d%3D%22M95%2070%20Q87%2041%20107%2047%20Q112%2019%20127%2045%20Q142%2020%20147%2049%20Q166%2040%20158%2072%22%20fill%3D%22%23d84f45%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%227%22%2F%3E%3Cellipse%20cx%3D%22101%22%20cy%3D%22119%22%20rx%3D%2211%22%20ry%3D%2215%22%20fill%3D%22%232d2630%22%2F%3E%3Cellipse%20cx%3D%22145%22%20cy%3D%22119%22%20rx%3D%2211%22%20ry%3D%2215%22%20fill%3D%22%232d2630%22%2F%3E%3Ccircle%20cx%3D%2297%22%20cy%3D%22114%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22141%22%20cy%3D%22114%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M107%20145%20L123%20133%20L139%20145%20L123%20157Z%22%20fill%3D%22%23e7a927%22%20stroke%3D%22%238d5c20%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M108%20166%20Q123%20178%20138%20166%22%20fill%3D%22none%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M49%20165%20Q4%20141%2031%20211%20Q45%20242%2082%20228%22%20fill%3D%22%23b44f31%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M197%20165%20Q242%20141%20215%20211%20Q201%20242%20164%20228%22%20fill%3D%22%23b44f31%22%20stroke%3D%22%23713b29%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M93%20264%20V294%20M153%20264%20V294%22%20stroke%3D%22%23b77920%22%20stroke-width%3D%228%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M78%20295%20H105%20M139%20295%20H166%22%20stroke%3D%22%23b77920%22%20stroke-width%3D%228%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A happy red hen standing beside a small wooden coop",
      cheer: "Cluck, cluck, hooray! H-E-N spells hen!",
      retry: "That spells pen. I am the hen. Try again!"
    },
    {
      word: "CAR",
      distractor: "CAN",
      name: "Cora the Car",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ECora%20the%20Car%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23d9f1ff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23d9edc4%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(43%20105)%22%3E%3Cpath%20d%3D%22M44%20128%20Q52%2077%2096%2068%20L133%2028%20H230%20L267%2069%20Q302%2078%20312%20128%20V181%20H44Z%22%20fill%3D%22%23d85a45%22%20stroke%3D%22%236b3b32%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M140%2042%20L111%2076%20H231%20L214%2042Z%22%20fill%3D%22%23bfe4f4%22%20stroke%3D%22%236b3b32%22%20stroke-width%3D%226%22%2F%3E%3Crect%20x%3D%2282%22%20y%3D%22103%22%20width%3D%22192%22%20height%3D%2259%22%20rx%3D%2224%22%20fill%3D%22%23e76750%22%2F%3E%3Ccircle%20cx%3D%22102%22%20cy%3D%22184%22%20r%3D%2233%22%20fill%3D%22%233a3440%22%20stroke%3D%22%236b3b32%22%20stroke-width%3D%227%22%2F%3E%3Ccircle%20cx%3D%22253%22%20cy%3D%22184%22%20r%3D%2233%22%20fill%3D%22%233a3440%22%20stroke%3D%22%236b3b32%22%20stroke-width%3D%227%22%2F%3E%3Ccircle%20cx%3D%22102%22%20cy%3D%22184%22%20r%3D%2215%22%20fill%3D%22%23ddd3c5%22%2F%3E%3Ccircle%20cx%3D%22253%22%20cy%3D%22184%22%20r%3D%2215%22%20fill%3D%22%23ddd3c5%22%2F%3E%3Cellipse%20cx%3D%22127%22%20cy%3D%22122%22%20rx%3D%2212%22%20ry%3D%2216%22%20fill%3D%22%232c2630%22%2F%3E%3Cellipse%20cx%3D%22220%22%20cy%3D%22122%22%20rx%3D%2212%22%20ry%3D%2216%22%20fill%3D%22%232c2630%22%2F%3E%3Ccircle%20cx%3D%22123%22%20cy%3D%22116%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22216%22%20cy%3D%22116%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M135%20145%20Q174%20170%20213%20145%22%20fill%3D%22none%22%20stroke%3D%22%236b3b32%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2262%22%20cy%3D%22137%22%20r%3D%2214%22%20fill%3D%22%23ffe186%22%2F%3E%3Ccircle%20cx%3D%22294%22%20cy%3D%22137%22%20r%3D%2214%22%20fill%3D%22%23ffe186%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A cheerful little red car parked on a cozy village lane",
      cheer: "Beep beep! C-A-R spells car!",
      retry: "That spells can. I have wheels. Find car!"
    },
    {
      word: "LOG",
      distractor: "LEG",
      name: "Mossy the Log",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3EMossy%20the%20Log%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23d8effa%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23cde3b2%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(52%20115)%22%3E%3Cpath%20d%3D%22M43%2086%20Q68%2035%20129%2047%20L259%2047%20Q300%2047%20316%2088%20Q325%20128%20294%20156%20Q277%20171%20242%20171%20H104%20Q51%20171%2036%20126%20Q27%20102%2043%2086Z%22%20fill%3D%22%239b673e%22%20stroke%3D%22%235c3f2b%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22274%22%20cy%3D%22108%22%20rx%3D%2248%22%20ry%3D%2261%22%20fill%3D%22%23c38b59%22%20stroke%3D%22%235c3f2b%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22274%22%20cy%3D%22108%22%20rx%3D%2229%22%20ry%3D%2239%22%20fill%3D%22none%22%20stroke%3D%22%239b673e%22%20stroke-width%3D%227%22%2F%3E%3Cpath%20d%3D%22M63%2061%20Q110%2027%20162%2055%20Q213%2024%20258%2055%22%20fill%3D%22none%22%20stroke%3D%22%235f8f3d%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22106%22%20cy%3D%22105%22%20r%3D%2212%22%20fill%3D%22%232d2630%22%2F%3E%3Ccircle%20cx%3D%22164%22%20cy%3D%22105%22%20r%3D%2212%22%20fill%3D%22%232d2630%22%2F%3E%3Ccircle%20cx%3D%22102%22%20cy%3D%22100%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22160%22%20cy%3D%22100%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M106%20134%20Q135%20154%20164%20134%22%20fill%3D%22none%22%20stroke%3D%22%235c3f2b%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%3Cg%20transform%3D%22translate(76%2036)%22%3E%3Cpath%20d%3D%22M0%2022%20Q12%200%2024%2022Z%22%20fill%3D%22%23d95f4d%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2222%22%20width%3D%225%22%20height%3D%2218%22%20fill%3D%22%23efe0bd%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(205%2029)%20scale(.8)%22%3E%3Cpath%20d%3D%22M0%2022%20Q12%200%2024%2022Z%22%20fill%3D%22%23f0c344%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2222%22%20width%3D%225%22%20height%3D%2218%22%20fill%3D%22%23efe0bd%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A mossy woodland log with a friendly face and tiny mushrooms",
      cheer: "You found the woodland word! L-O-G spells log!",
      retry: "That spells leg. I am a log. Look again!"
    },
    {
      word: "CUP",
      distractor: "PUP",
      name: "Coco the Cup",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ECoco%20the%20Cup%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dcecc8%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(72%2072)%22%3E%3Cpath%20d%3D%22M54%2062%20H210%20L194%20232%20Q190%20263%20158%20270%20H106%20Q74%20263%2070%20232Z%22%20fill%3D%22%2369a8c9%22%20stroke%3D%22%23365b72%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M210%2093%20Q267%2084%20270%20142%20Q271%20196%20207%20195%22%20fill%3D%22none%22%20stroke%3D%22%23365b72%22%20stroke-width%3D%2218%22%2F%3E%3Cellipse%20cx%3D%22132%22%20cy%3D%2264%22%20rx%3D%2278%22%20ry%3D%2222%22%20fill%3D%22%23d9f2fb%22%20stroke%3D%22%23365b72%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%22132%22%20cy%3D%2267%22%20rx%3D%2257%22%20ry%3D%2211%22%20fill%3D%22%238b5a36%22%2F%3E%3Cellipse%20cx%3D%22105%22%20cy%3D%22148%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%232c2630%22%2F%3E%3Cellipse%20cx%3D%22159%22%20cy%3D%22148%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%232c2630%22%2F%3E%3Ccircle%20cx%3D%22101%22%20cy%3D%22142%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22155%22%20cy%3D%22142%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M105%20184%20Q132%20205%20159%20184%22%20fill%3D%22none%22%20stroke%3D%22%23365b72%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M94%2024%20Q75%20-7%2092%20-29%20M132%2024%20Q113%20-7%20130%20-29%20M170%2024%20Q151%20-7%20168%20-29%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%229%22%20stroke-linecap%3D%22round%22%20opacity%3D%22.85%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A smiling blue cup on a picnic table with flowers nearby",
      cheer: "Sip, sip, hooray! C-U-P spells cup!",
      retry: "That spells pup. I am the cup. Try my word!"
    },
    {
      word: "CAP",
      distractor: "MAP",
      name: "Callie the Cap",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ECallie%20the%20Cap%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff1fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23d9e9bf%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(45%2095)%22%3E%3Cpath%20d%3D%22M67%20150%20Q76%2062%20166%2054%20Q256%2062%20265%20150Z%22%20fill%3D%22%2368a24e%22%20stroke%3D%22%233e6031%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M57%20150%20H275%20Q304%20150%20320%20179%20Q287%20199%20240%20201%20H83%20Q42%20198%2020%20174%20Q31%20154%2057%20150Z%22%20fill%3D%22%237db65e%22%20stroke%3D%22%233e6031%22%20stroke-width%3D%228%22%2F%3E%3Cpath%20d%3D%22M166%2056%20V149%22%20stroke%3D%22%233e6031%22%20stroke-width%3D%226%22%20opacity%3D%22.5%22%2F%3E%3Cellipse%20cx%3D%22135%22%20cy%3D%22118%22%20rx%3D%2212%22%20ry%3D%2217%22%20fill%3D%22%232c2630%22%2F%3E%3Cellipse%20cx%3D%22197%22%20cy%3D%22118%22%20rx%3D%2212%22%20ry%3D%2217%22%20fill%3D%22%232c2630%22%2F%3E%3Ccircle%20cx%3D%22131%22%20cy%3D%22112%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22193%22%20cy%3D%22112%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M136%20145%20Q166%20165%20196%20145%22%20fill%3D%22none%22%20stroke%3D%22%233e6031%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22166%22%20cy%3D%2257%22%20r%3D%2210%22%20fill%3D%22%23f2c14c%22%20stroke%3D%22%233e6031%22%20stroke-width%3D%225%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      alt: "A bright green cap resting on a cottage fence post",
      cheer: "You topped it! C-A-P spells cap!",
      retry: "That spells map. I am a cap. Try again!"
    },
    {
      word: "RAT",
      distractor: "BAT",
      name: "Rory the Rat",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ERory%20the%20Rat%3C%2Ftitle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sky%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23dff2fb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dcecc8%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%226%22%20stdDeviation%3D%225%22%20flood-color%3D%22%234b3b2a%22%20flood-opacity%3D%22.18%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22url(%23sky)%22%2F%3E%3Ccircle%20cx%3D%2255%22%20cy%3D%2262%22%20r%3D%2228%22%20fill%3D%22%23fff7c7%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M0%20290%20Q90%20250%20180%20292%20T400%20286%20V400%20H0Z%22%20fill%3D%22%238fbc67%22%2F%3E%3Cpath%20d%3D%22M0%20332%20Q110%20300%20215%20336%20T400%20326%20V400%20H0Z%22%20fill%3D%22%236f9e50%22%2F%3E%3Cg%20opacity%3D%22.95%22%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%2246%22%20cy%3D%22320%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%227%22%20fill%3D%22%23fff8dd%22%2F%3E%3Ccircle%20cx%3D%22340%22%20cy%3D%22312%22%20r%3D%223%22%20fill%3D%22%23d68d32%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%226%22%20fill%3D%22%23f7c6d8%22%2F%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22345%22%20r%3D%222.5%22%20fill%3D%22%23c57631%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23soft)%22%20transform%3D%22translate(78%2070)%22%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2292%22%20r%3D%2242%22%20fill%3D%22%23b9b4bf%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%228%22%2F%3E%3Ccircle%20cx%3D%22184%22%20cy%3D%2292%22%20r%3D%2242%22%20fill%3D%22%23b9b4bf%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%228%22%2F%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2292%22%20r%3D%2223%22%20fill%3D%22%23e6b4bd%22%2F%3E%3Ccircle%20cx%3D%22184%22%20cy%3D%2292%22%20r%3D%2223%22%20fill%3D%22%23e6b4bd%22%2F%3E%3Cellipse%20cx%3D%22127%22%20cy%3D%22164%22%20rx%3D%2294%22%20ry%3D%2294%22%20fill%3D%22%23c9c4cc%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%228%22%2F%3E%3Cellipse%20cx%3D%2297%22%20cy%3D%22151%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%232d2630%22%2F%3E%3Cellipse%20cx%3D%22157%22%20cy%3D%22151%22%20rx%3D%2213%22%20ry%3D%2218%22%20fill%3D%22%232d2630%22%2F%3E%3Ccircle%20cx%3D%2293%22%20cy%3D%22145%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22153%22%20cy%3D%22145%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M111%20184%20Q127%20197%20143%20184%20Q127%20169%20111%20184Z%22%20fill%3D%22%23d06e7d%22%2F%3E%3Cpath%20d%3D%22M127%20197%20Q127%20214%20109%20217%22%20fill%3D%22none%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M127%20197%20Q127%20214%20145%20217%22%20fill%3D%22none%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M82%20190%20H34%20M84%20203%20H25%20M172%20190%20H220%20M170%20203%20H229%22%20stroke%3D%22%23625c68%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M181%20224%20Q226%20238%20240%20271%22%20fill%3D%22none%22%20stroke%3D%22%23d897a4%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22127%22%20cy%3D%22245%22%20r%3D%2216%22%20fill%3D%22%23b8324f%22%2F%3E%3Cpath%20d%3D%22M127%20229%20Q133%20213%20147%20207%22%20fill%3D%22none%22%20stroke%3D%22%23557942%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
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
    elements.neighborImage.onerror = () => {
      elements.neighborImage.removeAttribute("src");
      elements.neighborImage.alt = round.alt;
      elements.neighborFrame.classList.add("image-fallback");
      elements.neighborFrame.setAttribute("data-fallback-word", round.word);
    };
    elements.neighborFrame.classList.remove("image-fallback");
    elements.neighborFrame.removeAttribute("data-fallback-word");
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
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20220%20220%22%20role%3D%22img%22%20aria-labelledby%3D%22title%22%3E%3Ctitle%20id%3D%22title%22%3ELetter%20Lane%20Explorer%20badge%3C%2Ftitle%3E%3Cdefs%3E%3CradialGradient%20id%3D%22medal%22%20cx%3D%2250%25%22%20cy%3D%2235%25%22%20r%3D%2265%25%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff6bd%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e3a51e%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22110%22%20r%3D%2298%22%20fill%3D%22url(%23medal)%22%20stroke%3D%22%238b5b18%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22110%22%20r%3D%2275%22%20fill%3D%22%23fff9df%22%20stroke%3D%22%23c98a17%22%20stroke-width%3D%227%22%2F%3E%3Cpath%20d%3D%22M45%20144%20Q110%20178%20175%20144%22%20fill%3D%22%2378a956%22%2F%3E%3Cpath%20d%3D%22M60%20126%20L110%2080%20L160%20126%20V160%20H60Z%22%20fill%3D%22%23f4efe3%22%20stroke%3D%22%2370472d%22%20stroke-width%3D%226%22%2F%3E%3Cpath%20d%3D%22M51%20128%20L110%2070%20L169%20128%22%20fill%3D%22none%22%20stroke%3D%22%23d85d46%22%20stroke-width%3D%2215%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Crect%20x%3D%2294%22%20y%3D%22126%22%20width%3D%2232%22%20height%3D%2234%22%20rx%3D%224%22%20fill%3D%22%237d5538%22%2F%3E%3Crect%20x%3D%2272%22%20y%3D%22120%22%20width%3D%2218%22%20height%3D%2220%22%20fill%3D%22%237bc5e8%22%2F%3E%3Crect%20x%3D%22130%22%20y%3D%22120%22%20width%3D%2218%22%20height%3D%2220%22%20fill%3D%22%237bc5e8%22%2F%3E%3Ccircle%20cx%3D%2257%22%20cy%3D%2286%22%20r%3D%2216%22%20fill%3D%22%236e9f50%22%2F%3E%3Ccircle%20cx%3D%2274%22%20cy%3D%2279%22%20r%3D%2219%22%20fill%3D%22%2378ad56%22%2F%3E%3Ccircle%20cx%3D%2289%22%20cy%3D%2288%22%20r%3D%2215%22%20fill%3D%22%235f9144%22%2F%3E%3Ctext%20x%3D%22110%22%20y%3D%22194%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Rounded%20MT%20Bold,%20Arial,%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%234b3428%22%3EEXPLORER%3C%2Ftext%3E%3C%2Fsvg%3E" alt="">
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
