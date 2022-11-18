const ham = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const ul = document.getElementById('ul');
function openMenu() { ul.style.display = 'flex'; }
function closeMenu() { ul.style.display = 'none'; }
cross.addEventListener('click', closeMenu);
ul.addEventListener('click', closeMenu);
ham.addEventListener('click', openMenu);

// PopUp Project DIV Js

const projectList = [
  {
    title: 'My First Project',
    img: './assets/folio1.svg',
    imgAlt: 'First img',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Second Project',
    img: './assets/folio2.svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Third Project',
    img: './assets/folio3.svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Fourth Project',
    img: './assets/folio4.svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Fifth Project',
    img: './assets/folio5.svg',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Sixth Project',
    img: './assets/folio6.svg',
    imgAlt: '#',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Java'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod holderor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
];

const body = document.querySelector('#popupModel');
const hide = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.proj-button');

buttons.forEach((button) => {
  button.addEventListener('click', (j) => {
    const holder = j.currentTarget.dataset;
    let i = 0;
    if (holder.id === 'id-1') {
      i = 0;
    } else if (holder.id === 'id-2') {
      i = 1;
    } else if (holder.id === 'id-3') {
      i = 2;
    } else if (holder.id === 'id-4') {
      i = 3;
    } else if (holder.id === 'id-5') {
      i = 4;
    } else if (holder.id === 'id-6') {
      i = 5;
    }
    const section = document.createElement('section');

    const projectIndex = projectList[i];

    const Model = `
<div class="popup-wrapper">
   <h2>${projectIndex.title}</h2>
   <ul>
       <li>${projectIndex.tech[0]}</li>
       <li>${projectIndex.tech[1]}</li>
       <li>${projectIndex.tech[2]}</li>
   </ul>
   <img class="hero" src="${projectIndex.img}" alt="${projectIndex.imgAlt}">
   <p class="p1">
       ${projectIndex.des[0]}
   </p>
   <p class="p2">
       ${projectIndex.des[1]}
   </p>
   <div class="btn-div">
       <a href="${projectIndex.demo[0]}"><button class="button1"><span>See Live</span><img src="./assets/ic_link.svg" alt="openlink"></button></a>
       <a href="${projectIndex.git[0]}"><button class="button2"><span>See Source</span><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_67_463)"><path d="M12 0.5C5.37 0.5 0 5.78 0 12.292C0 17.503 3.438 21.922 8.205 23.48C8.805 23.591 9.025 23.226 9.025 22.913C9.025 22.633 9.015 21.891 9.01 20.908C5.672 21.619 4.968 19.326 4.968 19.326C4.422 17.965 3.633 17.601 3.633 17.601C2.546 16.87 3.717 16.885 3.717 16.885C4.922 16.967 5.555 18.1 5.555 18.1C6.625 19.903 8.364 19.382 9.05 19.081C9.158 18.318 9.467 17.799 9.81 17.504C7.145 17.209 4.344 16.195 4.344 11.677C4.344 10.39 4.809 9.338 5.579 8.513C5.444 8.215 5.039 7.016 5.684 5.392C5.684 5.392 6.689 5.076 8.984 6.601C9.944 6.339 10.964 6.209 11.984 6.203C13.004 6.209 14.024 6.339 14.984 6.601C17.264 5.076 18.269 5.392 18.269 5.392C18.914 7.016 18.509 8.215 18.389 8.513C19.154 9.338 19.619 10.39 19.619 11.677C19.619 16.207 16.814 17.204 14.144 17.494C14.564 17.848 14.954 18.571 14.954 19.676C14.954 21.254 14.939 22.522 14.939 22.905C14.939 23.214 15.149 23.583 15.764 23.465C20.565 21.917 24 17.495 24 12.292C24 5.78 18.627 0.5 12 0.5Z" fill="currentColor"/></g><defs><clipPath id="clip0_67_463"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></button></a>
   </div>
   <div class="btn-nxt-rev">
       <a href="${projectIndex.demo[0]}"><button class="button3"><img src="./assets/ic_arrow_left.svg" alt="Previous Project"><span>Previous Project</span></button></a>
       <a href="${projectIndex.git[0]}"><button class="button4"><span>Next Project</span><img src="./assets/ic_arrow_right.svg" alt="next Project"></button></a>
   </div>
   <div id="popupBtnCross" class="popupBtncross"><img src="./assets/cross.svg" alt="cross"></div>
</div>`;

    section.innerHTML = Model;
    body.appendChild(section);
    hide.forEach((i) => i.classList.toggle('hiddenSec'));

    const btnClose = document.getElementById('popupBtnCross');

    function closePopup() {
      body.removeChild(section);
      hide.forEach((i) => i.classList.toggle('hiddenSec'));
    }
    btnClose.addEventListener('click', closePopup);
  });
});

//  form validation

const form = document.getElementById('form');
const input = document.getElementById('mail');
const errorPop = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const mail = input.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(mail)) {
    errorPop.innerHTML = '<div id="error-in">Email should be in lower case only !</div>';
  } else {
    form.submit();
  }
});

// local storage

const save = document.querySelector('#contact');
save.addEventListener('click', ()=> {
   n1= document.getElementById('name').value;
   e1= document.getElementById('mail').value;
   txt= document.getElementById('text-area').value;
  window.localStorage.setItem("name", n1);
  window.localStorage.setItem("mail", e1);
  window.localStorage.setItem("text-area", txt);
 
});

document.getElementById('name').value = localStorage.getItem("name");
document.getElementById('mail').value = localStorage.getItem("mail");
document.getElementById('text-area').value = localStorage.getItem("text-area");