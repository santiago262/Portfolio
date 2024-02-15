function toggleMenu(){
    const menu =document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const body = document.body;
const items = document.querySelectorAll('.icon');
const toggleDarkModeButton = document.getElementById('toggleDarkModeButton');
const darkModeIcon = document.getElementById('darkModeIcon');


toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const iconMode = document.querySelector('.icon-mode');
  
  if (body.classList.contains('dark-mode')) {
    setDarkMode();
    iconMode.src = "/assets/moon-sleep-svgrepo-com (1).svg";
  } else {
    setLightMode();
    iconMode.src = "/assets/sun-svgrepo-com.svg";
  }
});


function setDarkMode() {
  document.documentElement.style.setProperty('--color-black', 'rgb(0, 0, 0)');
  document.documentElement.style.setProperty('--color-grey', 'rgb(220, 220, 220)');
  document.documentElement.style.setProperty('--color-light-grey', 'rgb(163, 163, 163)');
  document.documentElement.style.setProperty('--color-white', 'rgb(240, 240, 240)');
  document.documentElement.style.setProperty('--color-btn-border', 'rgb(250, 250, 250)');
  document.documentElement.style.setProperty('--color-btn-background', 'rgb(250, 250, 250)');
  document.documentElement.style.setProperty('--color-background', 'rgb(30, 30, 30)')
  document.documentElement.style.setProperty('--color-btn-text', 'black');
  document.documentElement.style.setProperty('--color-btn-hover-background', 'rgb(234, 190, 63)');
  document.documentElement.style.setProperty('--color-btn-hover-border', 'rgb(234, 190, 63)');
  document.documentElement.style.setProperty('--color-link', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--color-link-hover', 'rgb(234, 190, 63)');
  document.documentElement.style.setProperty('--logo-color', 'white');
  document.documentElement.style.setProperty('--logo-hover', 'black');
  document.documentElement.style.setProperty('--color-link-hover-underline', 'rgb(234, 190, 63)');
  
items.forEach(function(elemento) {
    elemento.style.filter = 'invert(88%)';
});
}

function setLightMode() {
  document.documentElement.style.setProperty('--color-black', 'rgb(0, 0, 0)');
document.documentElement.style.setProperty('--color-grey', 'rgb(85, 85, 85)');
document.documentElement.style.setProperty('--color-light-grey', 'rgb(163, 163, 163)');
document.documentElement.style.setProperty('--color-white', 'rgb(255, 255, 255)');
document.documentElement.style.setProperty('--color-btn-border', 'rgb(53, 53, 53)');
document.documentElement.style.setProperty('--color-btn-background', 'rgb(53, 53, 53)');
document.documentElement.style.setProperty('--color-btn-text', 'rgb(255, 255, 255)');
document.documentElement.style.setProperty('--color-btn-hover-background', 'rgb(234, 190, 63)');
document.documentElement.style.setProperty('--color-btn-hover-border', 'rgb(255, 255, 255)');
document.documentElement.style.setProperty('--color-link', 'black');
document.documentElement.style.setProperty('--color-link-hover', 'rgb(234, 190, 63)');
document.documentElement.style.setProperty('--color-link-hover-underline', 'rgb(234, 190, 63)');
document.documentElement.style.setProperty('--logo-color', 'black');
document.documentElement.style.setProperty('--color-hover', 'white');
document.documentElement.style.setProperty('--color-background', 'withe');
items.forEach(function(elemento) {
  elemento.style.filter = 'invert(0)';
});
}