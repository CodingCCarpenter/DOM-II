// Your code goes here
// Selectors
const mainH1 = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.nav');
const body = document.querySelector('body');
const HTML = document.querySelector('html');
const images = document.querySelectorAll('img');
const btns = document.querySelectorAll('.destination .btn');
const aTags = document.querySelectorAll('nav a');
const h2And4Tags = document.querySelectorAll('h2, h4');
const pTags = document.querySelectorAll('p');

//MOUSEOVER- CHANGE FONT SIZE OF MAIN HEADER

mainH1.addEventListener('mouseover', () => {
  mainH1.style.fontSize = '5.7rem';
  setTimeout(() => {
    mainH1.style.fontSize = '';
  }, 500);
}, false);

//KEYDOWN- CHANGE BACKGROUND COLOR TO RANDOM COLOR

body.addEventListener('keydown', () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const rbgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  body.style.background = rbgColor;
});

//WHEEL- SIZES IMAGES UP OR DOWN
let scale = 1;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('wheel', (eventZoom) => {
    eventZoom.preventDefault();
    scale += eventZoom.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    images[i].style.transform = `scale(${scale})`;
  });
};

//CLICK- CHANGES TO RANDOM BUTTON COLOR AND BACKGROUND ON CLICK
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const backColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    let j = Math.floor(Math.random() * 256);
    let k = Math.floor(Math.random() * 256);
    let l = Math.floor(Math.random() * 256);
    const textColor = 'rgb(' + j + ',' + k + ',' + l + ')';
    btns[i].style.background = backColor;
    btns[i].style.color = textColor;
  });
};

//LOAD- LOGS PAGE LOADED STATUS
body.addEventListener('load', () => {
  console.log('This page has fully loaded.');
});

//FOCUS
for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener('focus', (lightgrayColor) => {
    lightgrayColor.target.style.background = 'mediumGray';
  });
};

//RESIZE
HTML.addEventListener('resize', () => {
  console.log(`${window.innerHeight} + ${window.innerWidth}`)
});

//MOUSEMOVE 
h2And4Tags.forEach((h) => {
  h.addEventListener('mousemove', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const pColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    h.style.color = pColor;
  });
})

//SELECT- 
for (let i = 0; i < pTags.length; i++) {
  pTags[i].addEventListener('select', (highlight) => {
    document.getElementsByTagName("p")[i].setAttribute("class", "log");
    const log = document.getElementById('log');
    const selection = highlight.target.value.substring(highlight.target.selectionStart, highlight.target.selectionEnd);
    console.log(`${log.textContent = `${selection}`}`)
  });
};

//DOUBLECLICK- REMOVE IMGS
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dblclick', () => {
        images[i].style.display = 'none';
  });
};

//CLICK
//********PREVENTDEFAULT
aTags.forEach(a => {
  a.addEventListener("click", stopReload => {
    stopReload.preventDefault();
  });
});


//**********SIMILAR EVENTS WITH PREVENT EVENT PROPRAGATION
//MOUSEOVER
mainNav.addEventListener("mouseover", (items) => {
    items.stopPropagation();
  });

//MOUSEOVER
mainNav.addEventListener("mouseover", () => {
    mainNav.style.color = 'ORANGE';
  });