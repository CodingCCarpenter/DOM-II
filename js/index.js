// Your code goes here
// Selectors
const mainH1 = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.nav');
const body = document.querySelector('body');
const HTML = document.querySelector('html');
const images = document.querySelectorAll('img');
const btns = document.querySelectorAll('.destination .btn');
const aTags = document.querySelectorAll('nav a');
const h2And4Tag = document.querySelectorAll('h2, h4');
const pTags = document.querySelectorAll('p');

mainH1.addEventListener('mouseover', () => {
  mainH1.style.fontSize = '5.7rem';
  setTimeout(() => {
    mainH1.style.fontSize = '';
  }, 500);
}, false);

body.addEventListener('keydown', () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const rbgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  body.style.background = rbgColor;
});

let scale = 1;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('wheel', (eventZoom) => {
    eventZoom.preventDefault();
    scale += eventZoom.deltaY * -0.01;
// Restrict Scale
    scale = Math.min(Math.max(.125, scale), 4);
// Apply Scale Transform
images[i].style.transform = `scale(${scale})`;
  });
};

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
    // Background Color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const backColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    // Font Color
    let j = Math.floor(Math.random() * 256);
    let k = Math.floor(Math.random() * 256);
    let l = Math.floor(Math.random() * 256);
    const textColor = 'rgb(' + j + ',' + k + ',' + l + ')';
    btns[i].style.background = backColor;
    btns[i].style.color = textColor;
  });
};

body.addEventListener('load', () => {
  console.log('page is loaded');
});

for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener('focus', (lightgrayColor) => {
    lightgrayColor.target.style.background = 'lightgray';
  });
};

HTML.addEventListener('resize', () => {
  console.log(`${window.innerHeight} + ${window.innerWidth}`)
});

h2And4Tag.forEach( h => {
  h.addEventListener('mousemove', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const pColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    h.style.color = pColor;
  });
})


for (let i = 0; i < pTags.length; i++) {
  pTags[i].addEventListener('select', (highlight) => {
    document.getElementsByTagName("p")[i].setAttribute("class", "log");
    const log = document.getElementById('log');
    const selection = highlight.target.value.substring(highlight.target.selectionStart, highlight.target.selectionEnd);
    console.log(`${log.textContent = `${selection}`}`)
  });
};

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dblclick', () => {
        images[i].style.display = 'none';
  });
};


aTags.forEach(a => {
  a.addEventListener("click", stopReload => {
    stopReload.preventDefault();
  });
});

mainNav.addEventListener("mouseover", (stuff) => {
    stuff.stopPropagation();
  });


mainNav.addEventListener("mouseover", () => {
    mainNav.style.color = 'green';
  });