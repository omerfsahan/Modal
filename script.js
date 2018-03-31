let modal = document.getElementById("modal"),
    modalBtn = document.getElementById("modalBtn"),
    closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener('click', modalOpen);
closeBtn.addEventListener('click', modalClose);
window.addEventListener('click', outsideClose);

function modalOpen() {
    modal.style.display = "block";
}


function modalClose() {
    modal.style.display = "none";
}

function outsideClose(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}