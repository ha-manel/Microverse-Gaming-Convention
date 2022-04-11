// dynamic program activities
const programDiv = document.querySelector('#activities-div');
const conventionActivities = [
  {
    img: '../images/lecture.png',
    title: 'Lecture',
    description: 'Listen to speakers from various countries and from different backgrounds talk about their latest experiences and creations.',
  },
  {
    img: '../images/stage.png',
    title: 'GC Exhibition',
    description: 'Appreciate various creations inluding new releases of games of various types.',
  },
  {
    img: '../images/forum.png',
    title: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts for each topic',
  },
  {
    img: '../images/workshop.png',
    title: 'Workshop',
    description: 'Get a chance to test new games and experience game designing in our workshops',
  },
  {
    img: '../images/ignite.png',
    title: 'GC Ignite',
    description: 'Get opportunities to network with the experts of the industry and to meet fellow gamers from all around the world',
  },
];
conventionActivities.forEach((activity) => {
  const activityDiv = document.createElement('div');
  activityDiv.className = 'activity';
  activityDiv.innerHTML = `<img src="${activity.img}" alt=" ">
  <h3>${activity.title}</h3>
  <p>${activity.description}</p>`;

  programDiv.appendChild(activityDiv);
});

// dynamic speakers
const speakersDiv = document.querySelector('#speakers-div');
const more = document.querySelector('#more');
const less = document.querySelector('#less');
const conventionSpeakers = [
  {
    picture: '../images/pewds.jpg',
    name: 'Felix Kjellberg (PewDiePie)',
    title: 'A Swedish YouTuber and gamer.',
    description: 'PewDiePie\'s popularity on YouTube and extensive media coverage have made him one of the most noted online personalities and content creators.',
  },
  {
    picture: '../images/markus-persson.jpg',
    name: 'Markus Persson',
    title: 'A Swedish video game programmer and designer.',
    description: 'He is best known for creating the sandbox video game Minecraft and for founding the video game company Mojang in 2009.',
  },
  {
    picture: '../images/shigeru-miyamoto.jpg',
    name: 'Shigeru Miyamoto',
    title: 'A Japanese video game designer, producer and game director.',
    description: 'He is the creator of some of the most acclaimed and best-selling game franchises of all time, including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.',
  },
  {
    picture: '../images/marc-merrill.jpg',
    name: 'Marc Merrill',
    title: 'President of Games for Riot Games.',
    description: 'Marc Merrill is the Co-Founder, Co-Chairman, and President of Games for Riot Games, the game developer and publisher behind League of Legends.',
  },
  {
    picture: '../images/rekkles.jpg',
    name: 'Carl Martin Erik Larsson (Rekkles)',
    title: 'A professional League of Legends player',
    description: 'He has played for Fnatic, Alliance, Elements, and G2 Esports.',
  },
  {
    picture: '../images/kaypea.webp',
    name: 'Kelsie Pelling (KayPea)',
    title: 'Partnered Twitch streamer',
    description: 'she is known for specialising as a mid-laner in League of Legends. She has developed a large community of people to share in positive and competitive gameplay.',
  },
];
conventionSpeakers.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.className = 'speaker';
  speakerDiv.innerHTML = `<div class="speaker-img">
          <img src="${speaker.picture}" alt="${speaker.name}">
        </div>
        <div class="speaker-description">
          <h3>${speaker.name}</h3>
          <small>${speaker.title}</small>
          <hr>
          <p>${speaker.description}</p>
        </div>`;
  speakersDiv.appendChild(speakerDiv);
  if (conventionSpeakers.indexOf(speaker) >= 2) {
    speakerDiv.classList.add('hidden');
  }
});

// show more speakers
const showMoreBtn = document.querySelector('#show-more');
const hiddenDiv = document.querySelectorAll('.hidden');
showMoreBtn.addEventListener('click', () => {
  hiddenDiv.forEach((div) => {
    div.classList.toggle('hidden');
  });
  more.classList.toggle('inactive');
  less.classList.toggle('active');
});