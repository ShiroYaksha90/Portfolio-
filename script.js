/*  popup  */
const mainProject = {
  id: '7',
  headTitle: 'Bookstore',
  headImg: './images/book-store.svg',
  headDesc: 'Bookstore is a web app that allows users to add, remove, and display books. The app is built with React and Redux. It also uses an external API to store and retrieve data.',
  headLanguages: ['React', 'Redux', 'CSS', 'HTML'],
  liveLink: 'https://book-store-jigy.onrender.com/',
  projLink: 'https://github.com/ShiroYaksha90/bookstore-react',
};
const headTitle = document.querySelector('.multi-desktop .main-project-title');
const headImg = document.querySelector('.image-poster');
const headDesc = document.querySelector('.main-project-paragraph');
const headLanguages = document.querySelector('.stack-unordered-list');
const mainProjectBtn = document.querySelector('.main-project-btn');
let lang = '';
mainProject.headLanguages.forEach((proTech) => {
  lang = `${lang}<li>${proTech}</li>`;
});
headTitle.innerHTML = mainProject.headTitle;
headImg.src = mainProject.headImg;
headDesc.innerHTML = mainProject.headDesc;
headLanguages.innerHTML = lang;
mainProjectBtn.dataset.id = mainProject.id;

const procards = [
  {
    cardId: '1',
    cardTitle: 'My World',
    cardDesc: 'This project is about building a mobile web application to compare metrics from different countries. This project utilizes an API to retrieve information about countries and continents, which is then displayed through the use of React functions.',
    cardLang: ['React', 'Redux', 'Css', 'Html'],
    cardImage: 'images/main-project.PNG',
    cardbackgroundstyle: 'background:url(./images/main-project.PNG);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://my-world-sems.onrender.com/',
    projLink: 'https://github.com/ShiroYaksha90/react-redux-capstone',
  },
  {
    cardId: '2',
    cardTitle: 'Foodo',
    cardDesc: 'Foodo is a full-stack application built with Ruby on Rails. It allows users to create, edit, and delete their own unique recipes. Users can also add ingredients, and follow step-by-step cooking instructions. The app features user authentication, and a responsive design for an optimal user experience',
    cardLang: ['RoR', 'bootstrap', 'Rspec', 'Postgres'],
    cardImage: 'images/foodo.png',
    cardbackgroundstyle: 'background:url(./images/foodo.png);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://foodo.onrender.com/',
    projLink: 'https://github.com/ShiroYaksha90/Foodo',
  },
  {
    cardId: '3',
    cardTitle: 'Simon game',
    cardDesc: "Simon game is an interactive fun web app based on the famous game Simon, the way that it works is that you can press any key to start and it will show you a tile that you have to click on. And as you go from level to level, the patterns get more and more complicated, and at some point you're going to screw up, and it's going to tell you that you’ve got it wrong and game is over, so you can press any key to restart the game.",
    cardLang: ['HTML', 'CSS', 'Javascript', 'JQuery'],
    cardImage: 'images/Simon-game.png',
    cardbackgroundstyle: 'background:url(./images/Simon-game.png);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://shiroyaksha90.github.io/Simon-game/',
    projLink: 'https://github.com/ShiroYaksha90/Simon-game',
  },
  {
    cardId: '4',
    cardTitle: 'Space Hub',
    cardDesc: 'Space Hub is a web app built with React and Redux, it fetches data from SpaceX API and Displays it.',
    cardLang: ['React', 'Redux', 'Css', 'Html'],
    cardImage: 'images/Space-Travelers-Hub.svg',
    cardbackgroundstyle: 'background:url(./images/Space-Travelers-Hub.svg);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://space-hub-osb.netlify.app/',
    projLink: 'https://github.com/ShiroYaksha90/space-hub-traveler',
  },
  {
    cardId: '5',
    cardTitle: 'Math Magician',
    cardDesc: 'This is a Single Page App (SPA) that allows users to: - Make simple calculations - Read a random quote',
    cardLang: ['React', 'API', 'Css'],
    cardImage: 'images/math-magician.PNG',
    cardbackgroundstyle: 'background:url(./images/math-magician.PNG);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://basim-math-magician.onrender.com/',
    projLink: 'https://github.com/ShiroYaksha90/math-magician',
  },
  {
    cardId: '6',
    cardTitle: 'Go movies',
    cardDesc: 'Go Movies is a simple web app that fetches and stores data in multiple APIs and displays them, it uses modular architecture as well as webpack.',
    cardLang: ['Javascript', 'Webpack', 'Css'],
    cardImage: 'images/go-movie.PNG',
    cardbackgroundstyle: 'background:url(./images/Go-Movie.svg); background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://dheerajsachdeva.github.io/capstone2/dist/',
    projLink: 'https://github.com/ShiroYaksha90/javascript-capstone',
  },
];
const workCards = document.querySelector('.work-grid');
workCards.innerHTML = '';
for (let i = 0; i < procards.length; i += 1) {
  let lang = '';
  procards[i].cardLang.forEach((cardLang) => {
    lang = `${lang}<li>${cardLang}</li>`;
  });
  workCards.innerHTML += `<div class="col-lg-3 col-md-6 mb-4"><div class="work-flex" style="${procards[i].cardbackgroundstyle};">
<h1 class="work-title">${procards[i].cardTitle}</h1>
<p class="work-paragraph">${procards[i].cardDesc}</p>
<ul class ="code">${lang}</ul>
<button class="pr-btn pop" data-id="${procards[i].cardId}" type="button">
See project
</button>
</div>
</div>
`;
}
const popUp = () => {
  const popContainer = document.querySelector('.popcontainer');
  const mainProjectBtn = document.querySelector('.main-project-btn');
  mainProjectBtn.addEventListener('click', () => {
    popContainer.innerHTML = `<div class="popdisplay border border-warning rounded-1 border-1 shadow-lg mt-3 d-flex flex-column gap-3 p-2 bg-white">
  <div class="poptitle">
    <h1 class="pophead">${mainProject.headTitle}</h1>
    <button  class="closebtn"><i class="bi bi-x"></i></button>
  </div>
  <div class="container-fluid">
    <ul class="d-flex flex-wrap gap-1 ps-0">
      ${mainProject.headLanguages.map((lang) => `<li class="poplang">${lang}</li>`).join('')}
    </ul>
  </div>

  
  <div class="popcontent">
  <img src="${mainProject.headImg}" class="border border-warning border-2 rounded-1 border-opacity-50 w-100" alt="Main project Image">
  <div class="btnpara">
    <p class="poppara">${mainProject.headDesc}</p>
    <div class="btndis">
      <button class="popbtn"><a href="${mainProject.liveLink}" target="_blank"> See Live </a><i class="bi bi-box-arrow-up-right"></i></button>
      <button class="popbtn"><a href="${mainProject.projLink}" target="_blank"> See Source </a><i class="bi bi-github"></i></button>
  </div>
  </div>
  </div>

</div>`;
    popContainer.classList.toggle('active');
    const closePopUp = document.querySelector('.closebtn');
    closePopUp.addEventListener('click', () => {
      popContainer.classList.remove('active');
    });
  });
};
const cardsBtn = document.querySelectorAll('.pop');
cardsBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const cardId = e.target.dataset.id;
    const targerCard = procards.filter((item) => item.cardId === cardId);
    const popContainer = document.querySelector('.popcontainer');
    popContainer.innerHTML = targerCard.map((item) => `<div class="popdisplay border border-warning rounded-1 border-1 shadow-lg mt-3 d-flex flex-column gap-3 p-2 bg-white">
    <div class="poptitle">
      <h1 class="pophead">${item.cardTitle}</h1>
      <button  class="closebtn"><i class="bi bi-x"></i></button>
    </div>
    <div class="container-fluid">
      <ul class="d-flex flex-wrap gap-1 ps-0">
        ${item.cardLang.map((lang) => `<li class="poplang">${lang}</li>`).join('')}
      </ul>
    </div>
    <div class="popcontent">
    <img src="${item.cardImage}" class="border border-warning border-2 rounded-1 border-opacity-50 w-100" alt="Main project Image">
    <div class="btnpara">
      <p class="poppara">${item.cardDesc}</p>
      <div class="btndis">
        <button class="popbtn"><a href="${item.liveLink}" target="_blank"> See Live </a><i class="bi bi-box-arrow-up-right"></i></button>
        <button class="popbtn"><a href="${item.projLink}" target="_blank"> See Source </a><i class="bi bi-github"></i></button>
    </div>
    </div>
    </div>`);
    popContainer.classList.toggle('active');
    const closePopUp = document.querySelector('.closebtn');
    closePopUp.addEventListener('click', () => {
      popContainer.classList.remove('active');
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  popUp();
});

/*  Form validation     */
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const span = document.querySelector('#span');
const userName = document.querySelector('#name');
const message = document.querySelector('#msg');

// Function that validates email address
const validMail = (usermail) => {
  if (
    usermail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)
  ) {
    return true;
  }
  return false;
};

// Event listener for email validation
form.addEventListener('submit', (e) => {
  if (!validMail(email.value)) {
    e.preventDefault();
    span.textContent = 'Please enter a valid email';
  } else {
    span.textContent = '';
  }
});

/* ////////// localstorage\\\\\\\\\ */

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));
  if (userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  } else {
    userName.value = '';
    email.value = '';
    message.value = '';
  }
});

// Add to localStorage
form.addEventListener('input', () => {
  const object = {};
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;

  localStorage.setItem('data', JSON.stringify(object));
});

// reset form input

const clearInput = () => {
  userName.value = '';
  email.value = '';
  message.value = '';
};

window.addEventListener('DOMContentLoaded', () => {
  clearInput();
});
// download resume

const download = document.querySelector('.about-btn');

download.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://docs.google.com/document/d/16mz9lVdK0cL9mOBPwxSg_4d1tfLqpJmFgrHSXznwXMI/export?format=pdf';
  link.download = 'Basim-Aljazaeri-resume.pdf';
  link.click();
});