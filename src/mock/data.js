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
  subtitle: 'NYC-based Web Developer',
  cta: `Let's Connect!`,
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.png',
  paragraphOne: `Currently open to new projects!`,
  paragraphTwo: `I specialize in helping you grow to the next level. I've done everything from a simple landing pages to taking entire web-apps from design to release.`,
  paragraphThree: ``,
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RBMA.png',
    title: 'Red Bull Music Academy',
    info: `A site where that holds all the archives and transcripts of the legendary musicians interviewed as part of Red Bull Music Academy`,
    info2: ' ',
    url: 'https://www.redbullmusicacademy.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RBMA-daily.png',
    title: 'Red Bull Music Academy Daily',
    info: `An online magazine for Red Bull`,
    info2: ' ',
    url: 'https://daily.redbullmusicacademy.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tandem.png',
    title: 'Tandem Diabetes',
    info: `An insulin pump that is used by 100,000s of diabetics. I help present their pump data in a way that is readable and informative to health care providers.`,
    info2: ' ',
    url: 'https://www.tandemdiabetes.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Scruff.png',
    title: 'Scruff Dating',
    info: 'The largest Queer dating app in the US',
    info2: '',
    url: 'https://www.scruff.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'Relevant.png',
    title: 'Relevant Community',
    info: 'A crypto-backed Reddit-style forum for discussion of news and niche topics',
    info2: '',
    url: 'https://relevant.community/relevant/top',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Loop.png',
    title: 'Ableton Loop',
    info: ` `,
    info2: ' ',
    url: 'https://loop.ableton.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Carson.png',
    title: 'Carson Living',
    info: 'A digital doorman app that lets you open doors and view cameras from your phone.',
    info2: '',
    url: 'https://www.carson.live/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Goodpoint.png',
    title: 'Goodpoint',
    info: 'A Twitter-like social network with a focus on public-good.',
    info2: '',
    url: 'https://www.mygoodpoint.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Let's connect!`,
  btn: `Tell me what you're working on`,
  email: 'santiagoangel10@gmail.com',
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
