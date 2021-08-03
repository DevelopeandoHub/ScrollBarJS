window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    /* console.log(progress); */
    /* update(); */
    requestAnimationFrame(update);
    
  });
  
  function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
  }
  