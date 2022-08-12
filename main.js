const myModal = document.querySelector("#myModal");
const modalInvoke = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close");
const modalOkey = document.querySelector(".btn-okey");
const modalCancel = document.querySelector(".btn-cancel");
const body = document.querySelector("body");

modalInvoke.addEventListener("click", () => {
  myModal.classList.remove("modal-close");
  myModal.classList.add("modal-open");
  body.classList.remove("active");
});

modalClose.addEventListener("click", classListHack);

window.onclick = function (event) {
  if (event.target == myModal) {
    classListHack();
  }
};

modalOkey.addEventListener("click", classListHack);

modalCancel.addEventListener("click", classListHack);

function classListHack() {
  myModal.classList.add("modal-close");
  myModal.classList.remove("modal-open");
  body.classList.add("active");
}
