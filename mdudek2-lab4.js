// IIFE function

(function() {
  
  // select the h1 in the hero and modify it's text
  const hero_h1 = document.querySelector('#hero h1');
  hero_h1.textContent = "Supercharge Your Brand with Stellar Marketing"

  // select the p in the hero and modify it's text
  const hero_p = document.querySelector('#hero p')
  hero_p.innerHTML = 'Leverage innovative strategies from Stellar Marketing to make your Business <strong><em>shine</em></strong> and <strong><em>succeed</em></strong>.';
})();