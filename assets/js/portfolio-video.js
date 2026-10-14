const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.experience-video').forEach((video) => {
  let inView = false;

  const updatePlayback = () => {
    if (inView && !document.hidden && !motionPreference.matches) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    updatePlayback();
  });

  observer.observe(video);
  motionPreference.addEventListener('change', updatePlayback);
  document.addEventListener('visibilitychange', updatePlayback);
});
