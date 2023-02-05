import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Santiago Angel - Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Santiago Angel | NYC based web developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Santiago Angel',
  subtitle: 'NYC based frontend developer',
  cta: `Let's Connect!`,
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.png',
  paragraphOne: `I'm a very good developer`,
  paragraphTwo: `I work with React!`,
  paragraphThree: `Easy to work with, have worked with companies big and small to achieve their goals, whether that be launching a new product or creating a year in review site for investors.`,
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RBMA.png',
    title: 'Red Bull Music Academy',
    info: '',
    info2: '',
    url: 'https://www.redbullmusicacademy.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RBMA-daily.png',
    title: 'Red Bull Music Academy Daily',
    info: '',
    info2: '',
    url: 'https://daily.redbullmusicacademy.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Loop.png',
    title: 'Ableton Loop',
    info: '',
    info2: '',
    url: 'https://loop.ableton.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Goodpoint.png',
    title: 'Goodpoint',
    info: '',
    info2: '',
    url: 'https://www.mygoodpoint.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tandem.png',
    title: 'Tandem Diabetes',
    info: '',
    info2: '',
    url: 'https://www.tandemdiabetes.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Carson.png',
    title: 'Carson Living',
    info: '',
    info2: '',
    url: 'https://www.carson.live/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Relevant.png',
    title: 'Relevant Community',
    info: '',
    info2: '',
    url: 'https://relevant.community/relevant/top',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Scruff.png',
    title: 'Scruff Dating',
    info: '',
    info2: '',
    url: 'https://www.scruff.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: 'https://www.linkedin.com/in/santiago-angel-6310b327/',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: 'https://github.com/sangeltandem',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
