const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item => {
  item.addEventListener('mouseover', () => {
    const video = item.children[1];
    video.play();
  });
  item.addEventListener('mouseleave', () => {
    const video = item.children[1];
    video.pause();
  });
});
