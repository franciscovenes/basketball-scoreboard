let homeCount = 0;
let guestCount = 0;

homeEl = document.getElementById('home-el')
guestEl = document.getElementById('guest-el')

function addPointsHome(points) {
    homeCount += points
    homeEl.textContent = homeCount
    if ( homeCount > guestCount ) {
        homeEl.style.border = "solid 1px #059669"
        guestEl.style.border = "none"
    } else if ( guestCount === homeCount ) {
        homeEl.style.border = "none"
        guestEl.style.border = "none"
    } 
}

function addPointsGuest(points) {
    guestCount += points
    guestEl.textContent = guestCount
    if ( guestCount > homeCount ) {
        homeEl.style.border = "none"
        guestEl.style.border = "solid 1px #059669"
    } else if ( guestCount === homeCount ) {
        homeEl.style.border = "none"
        guestEl.style.border = "none"
    } 
}

function startNewGame() {
    homeCount = 0;
    guestCount = 0;
    homeEl.textContent = homeCount
    guestEl.textContent = guestCount
    homeEl.style.border = "none"
    guestEl.style.border = "none"    
}
