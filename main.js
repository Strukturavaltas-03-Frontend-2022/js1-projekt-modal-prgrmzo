const myModal = document.querySelector('#myModal');
const modalInvoke = document.querySelector('.modal-btn');
const modalClose = document.querySelector('.close');
const modalOkey = document.querySelector('.btn-okey');
const modalCancel = document.querySelector('.btn-cancel');
const body = document.querySelector('body');

modalInvoke.addEventListener('click', () => {
    myModal.classList.remove('modal-close');
    myModal.classList.add('modal-open');
    body.classList.remove('active');
})

modalClose.addEventListener('click', () => {
    myModal.classList.add('modal-close');
    myModal.classList.remove('modal-open');
    body.classList.add('active');
})

window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.classList.add('modal-close');
        myModal.classList.remove('modal-open');
        body.classList.add('active');
    }
  }

modalOkey.addEventListener('click', () => {
    myModal.classList.add('modal-close');
    myModal.classList.remove('modal-open');
    body.classList.add('active');
})

modalCancel.addEventListener('click', () => {
    myModal.classList.add('modal-close');
    myModal.classList.remove('modal-open');
    body.classList.add('active');
})
