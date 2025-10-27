// IIFE function

(function() {
  
  // select the h1 in the hero and modify it's text
  const hero_h1 = document.querySelector('#hero h1');
  hero_h1.textContent = "Supercharge Your Brand with Stellar Marketing"

  // select the p in the hero and modify it's text
  const hero_p = document.querySelector('#hero p');
  hero_p.innerHTML = 'Leverage innovative strategies from Stellar Marketing to make your Business <span class="italic_bold">shine</span> and <span class="italic_bold">succeed</span>.';

  // Apply CSS via JavaScript
  const italic_bold = document.querySelectorAll('.italic_bold');
  italic_bold.forEach(span => {
    span.style.fontWeight = 'bold';
    span.style.fontStyle = 'italic';
  });

  // Select the hero section and change it's background image
  const hero = document.querySelector('#hero');
  hero.style.backgroundImage = "url(https://picsum.photos/id/683/1280/720)";

  // Select the header and change it's background to be the same as the footer
  const header = document.querySelector('header')
  const footer = document.querySelector('footer');
  const footer_background = getComputedStyle(footer).backgroundColor;
  header.style.backgroundColor = footer_background;

})();