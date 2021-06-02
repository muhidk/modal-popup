// select our elements
const modal = document.querySelector(".modal");
const show = document.querySelector(".show");
const closeButton = document.querySelector(".close-button");

// add event listeners
show.addEventListener("click", () => toggleModal(modal));
closeButton.addEventListener("click", () => toggleModal(modal));
window.addEventListener("click", (event) => windowOnClick(event, modal));

// helper functions
function toggleModal(modal) {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event, modal) {
    if (event.target === modal) toggleModal(modal)
}
