// demo/game.js — tiny canvas demo: move the player (arrow keys) to collect stars
(function(){
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width; const H = canvas.height;
  let keys = {};
  let player = {x: W/2, y: H/2, r:14, speed:220};
  let stars = [];
  let score = 0;
  let last = performance.now();

  function spawnStar(){
    stars.push({x:30+Math.random()*(W-60), y:30+Math.random()*(H-60), r:8});
  }
  for(let i=0;i<5;i++) spawnStar();

  window.addEventListener('keydown', e=> keys[e.key]=true);
  window.addEventListener('keyup', e=> keys[e.key]=false);

  function step(now){
    const dt = Math.min(0.05, (now - last)/1000);
    last = now;
    update(dt); draw();
    requestAnimationFrame(step);
  }

  function update(dt){
    let dx=0, dy=0;
    if(keys['ArrowLeft']||keys['a']) dx=-1;
    if(keys['ArrowRight']||keys['d']) dx=1;
    if(keys['ArrowUp']||keys['w']) dy=-1;
    if(keys['ArrowDown']||keys['s']) dy=1;
    if(dx||dy){
      const len = Math.hypot(dx,dy)||1; dx/=len; dy/=len;
      player.x += dx * player.speed * dt; player.y += dy * player.speed * dt;
      player.x = Math.max(player.r, Math.min(W-player.r, player.x));
      player.y = Math.max(player.r, Math.min(H-player.r, player.y));
    }
    // collisions
    for(let i=stars.length-1;i>=0;i--){
      const s = stars[i];
      const dist = Math.hypot(player.x-s.x, player.y-s.y);
      if(dist < player.r + s.r){ stars.splice(i,1); score++; spawnStar(); }
    }
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    // background grid
    ctx.fillStyle='#061022'; ctx.fillRect(0,0,W,H);
    // stars
    for(const s of stars){
      ctx.fillStyle='#ffdd57'; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    }
    // player
    ctx.fillStyle='#0f62fe'; ctx.beginPath(); ctx.arc(player.x,player.y,player.r,0,Math.PI*2); ctx.fill();
    // HUD
    ctx.fillStyle='#fff'; ctx.font='16px sans-serif'; ctx.fillText('Score: '+score, 10, 22);
  }

  // restart button
  const restart = document.getElementById('restartBtn');
  restart.addEventListener('click', function(){ score=0; player.x=W/2; player.y=H/2; stars=[]; for(let i=0;i<5;i++) spawnStar(); });

  requestAnimationFrame(step);
})();
