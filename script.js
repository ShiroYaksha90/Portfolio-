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
    cardTitle: 'Cashup',
    cardDesc: 'Cashup is a web-based budget app built using Ruby on Rails and PostgreSQL. With Cashup, users can effortlessly track their expenses, gaining full control over their finances.',
    cardLang: ['RoR', 'Rspec', 'Postgres'],
    cardImage: 'images/cashup.PNG',
    cardbackgroundstyle: 'background:url(./images/cashup.PNG);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://cashup.onrender.com/',
    projLink: 'https://github.com/ShiroYaksha90/cashup',
  },
  {
    cardId: '3',
    cardTitle: 'Leaderboard',
    cardDesc: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    cardLang: ['Javascript', 'API', 'Webpack'],
    cardImage: 'images/leaderboard.PNG',
    cardbackgroundstyle: 'background:url(./images/leaderboard.PNG);background-size: 100% 85%;background-repeat: no-repeat;',
    liveLink: 'https://shiroyaksha90.github.io/Leaderboard/',
    projLink: 'https://github.com/ShiroYaksha90/Leaderboard',
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
    popContainer.innerHTML = `<div class="popdisplay">
  <div class="poptitle">
    <h1 class="pophead">${mainProject.headTitle}</h1>
    <button  class="closebtn"><i class="bi bi-x"></i></button>
  </div>
  <div class="poptech">
    <ul class="popcode">
      ${mainProject.headLanguages.map((lang) => `<li class="poplang">${lang}</li>`).join('')}
    </ul>
  </div>

  
  <div class="popcontent">
  <img id="popimg" src="${mainProject.headImg}" alt="Main project Image">
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
    popContainer.innerHTML = targerCard.map((item) => `<div class="popdisplay">
    <div class="poptitle">
      <h1 class="pophead">${item.cardTitle}</h1>
      <button  class="closebtn"><i class="bi bi-x"></i></button>
    </div>
    <div class="poptech">
      <ul class="popcode">
        ${item.cardLang.map((lang) => `<li class="poplang">${lang}</li>`).join('')}
      </ul>
    </div>
    <div class="popcontent">
    <img id="popimg" src="${item.cardImage}" alt="Main project Image">
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