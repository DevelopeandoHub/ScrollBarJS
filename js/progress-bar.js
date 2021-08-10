/* Apenas se carga el sitio, nuestro codigo le hace una petición al buscador para que actualice la barra de progreso cada vez que redibuja la pantalla */

window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
    
  });
  
  function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
  }
  