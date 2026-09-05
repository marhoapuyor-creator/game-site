// game-loader.js — loads the demo game and handles the contact form
(function(){
  // Simple contact form POST to Formspree if configured
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const endpoint = window.FORM_ENDPOINT || '';
    status.textContent = 'Sending...';
    if(endpoint){
      fetch(endpoint, {method:'POST', body: data, headers:{'Accept':'application/json'}})
        .then(r=>{ if(r.ok) { status.textContent='Thanks — we will reply soon.'; form.reset(); } else { status.textContent='Could not send message. Try email.' } })
        .catch(()=> status.textContent='Network error. Try email.')
    } else {
      status.textContent = 'Form not configured. Use mailto: contact@marhoapuyor-creator.com';
    }
  });

  // Load demo game
  function loadGame(){
    var script = document.createElement('script');
    script.src = '/demo/game.js';
    document.body.appendChild(script);
  }
  if(document.readyState==='complete' || document.readyState==='interactive') loadGame(); else window.addEventListener('DOMContentLoaded', loadGame);
})();
