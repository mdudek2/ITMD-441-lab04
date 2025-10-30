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

  // grab needed styles of old cta before deleting it
  const get_started = document.querySelector('#hero a')
  const get_started_padding = getComputedStyle(get_started).padding;
  const get_started_fontsize = getComputedStyle(get_started).fontSize;
  
  // Remove Get Started CTA from hero
  get_started.remove();
  
  // insert section below hero
  hero.insertAdjacentHTML('afterend', `
    <section id="afterhero">
      <a href="contact.html" id="newcta">Schedule a Consultation Today</a>
    </section>
` );
 
  // style the newly added section and cta
  const afterhero = document.getElementById('afterhero')
  const afterherocta = document.getElementById('newcta')
  afterhero.style.backgroundColor = '#6495ed'
  afterhero.style.display = 'flex'
  afterhero.style.justifyContent = 'center'
  afterhero.style.alignItems = 'center'
  afterhero.style.paddingTop = '32px'
  afterhero.style.paddingBottom = '32px'
  afterherocta.style.padding = get_started_padding
  afterherocta.style.fontSize = get_started_fontsize
  afterherocta.style.backgroundColor = 'white'
  afterherocta.style.border = '4px solid rgb(37, 99, 235)'
  afterherocta.style.color = 'rgb(37, 99, 235)'
  afterherocta.style.filter = 'drop-shadow(1px 1x)'

  // remove bottom margin on hero to get rid of white space
  hero.style.marginBottom = '0px'

  // add margin to the bottom of afterhero section to ensure proper spacing
  afterhero.style.marginBottom = '48px'
  
  // add click event listener
  afterherocta.addEventListener('click', function(event) {
    event.preventDefault(); // prevents navigating to contact.html
    alert('Thank You for your Interest in Stellar Marketing!');
  });

  // Select all spans with the class "material-symbols-outlined"
  const icons = document.querySelectorAll('.material-symbols-outlined');

  // Loop through each icon and change the color to the correct shade of blue
  icons.forEach(icon => {
    icon.style.color = '#6495ed'
  });
  
  // change the digital marketing icon to use Ads Click symbol
  icons[0].textContent = 'Ads_Click'

  // change tile layout in marketing


  // change musicians image
  const music_img = document.querySelector('img[alt="Musicians"]')
  music_img.src = 'https://picsum.photos/id/453/400/300'

  // change copyright in footer
  const footer_text = document.querySelector('footer p')
  footer_text.textContent = '© 2025 Stellar Marketing Agency. All rights reserved.'


  
  
  
  
})();