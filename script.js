const ham = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const ul = document.getElementById('ul');
function openMenu() { ul.style.display = 'flex'; }
function closeMenu() { ul.style.display = 'none'; }
cross.addEventListener('click', closeMenu);
ul.addEventListener('click', closeMenu);
ham.addEventListener('click', openMenu);