const dialog = document.getElementById('popup');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


openBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});