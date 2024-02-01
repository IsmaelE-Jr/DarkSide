import './style.css';

const main = () => {
  const hideOverlay = () => {
    const delay = 4000;
  
    setTimeout(() => {
      const overlay = document.getElementById('overlay');
      const app = document.getElementById('app');
      
      overlay.style.opacity = 0;

      app.style.display = 'block';
      app.style.opacity = 1;
    }, delay);
  };

  const backgroundMusic = document.getElementById('backgroundMusic');

  backgroundMusic.play();

  hideOverlay();
};

main();
