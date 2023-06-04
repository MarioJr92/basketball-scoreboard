let homeCount = 0;
let guestCount = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeTitle = document.getElementById("home-title");
let guestTitle = document.getElementById("guest-title");

homeEl.textContent = 0;
guestEl.textContent = 0;

const increaseHomeCountOne = () => {
    homeCount++;
    homeEl.textContent = homeCount;
    updateLeadingTeam();
};

const increaseHomeCountTwo = () => {
    homeCount += 2;
    homeEl.textContent = homeCount;
    updateLeadingTeam();
};

const increaseHomeCountThree = () => {
    homeCount += 3;
    homeEl.textContent = homeCount;
    updateLeadingTeam();
};

const increaseGuestCountOne = () => {
    guestCount++;
    guestEl.textContent = guestCount;
    updateLeadingTeam();
};

const increaseGuestCountTwo = () => {
    guestCount += 2;
    guestEl.textContent = guestCount;
    updateLeadingTeam();
};

const increaseGuestCountThree = () => {
    guestCount += 3;
    guestEl.textContent = guestCount;
    updateLeadingTeam();
};

const updateLeadingTeam = () => {
    if (homeCount > guestCount) {
        homeTitle.classList.add("animation");
        guestTitle.classList.remove("animation");
    } else if (homeCount < guestCount) {
        guestTitle.classList.add("animation");
        homeTitle.classList.remove("animation");
    } else {
        homeTitle.classList.add("animation");
        guestTitle.classList.add("animation");
    }
};

const resetScores = () => {
    document.getElementById("home-el").textContent = 0;
    document.getElementById("guest-el").textContent = 0;
    homeTitle.classList.remove("animation");
    guestTitle.classList.remove("animation");
    homeCount = 0;
    guestCount = 0;
};