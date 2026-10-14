document.querySelectorAll('.case-study-video').forEach((video) => {
  const videoLabel = video.dataset.videoLabel || 'article video';
  const updateLabel = () => {
    video.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} ${videoLabel}`);
  };

  const togglePlayback = () => {
    if (video.paused) {
      video.play().catch(updateLabel);
    } else {
      video.pause();
    }
  };

  video.addEventListener('click', togglePlayback);
  video.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      togglePlayback();
    }
  });
  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);
  updateLabel();
});
