let homeCount = 0;
let guestCount = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

homeEl.textContent = 0;
guestEl.textContent = 0;

const increaseHomeCountOne = () => {
    homeCount++;
    homeEl.textContent = homeCount;
};

const increaseHomeCountTwo = () => {
    homeCount += 2;
    homeEl.textContent = homeCount;
};

const increaseHomeCountThree = () => {
    homeCount += 3;
    homeEl.textContent = homeCount;
};

const increaseGuestCountOne = () => {
    guestCount++;
    guestEl.textContent = guestCount;
};

const increaseGuestCountTwo = () => {
    guestCount += 2;
    guestEl.textContent = guestCount;
};

const increaseGuestCountThree = () => {
    guestCount += 3;
    guestEl.textContent = guestCount;
};