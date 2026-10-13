(() => {
  const root = document.documentElement;
  if (!root.classList.contains("is-homepage")) return;

  let updatePending = false;

  function updateHeader() {
    // Separate thresholds keep resizing from toggling the header near the top.
    const threshold = root.classList.contains("is-scrolled") ? 8 : 48;
    root.classList.toggle("is-scrolled", window.scrollY > threshold);
    updatePending = false;
  }

  window.addEventListener("scroll", () => {
    if (updatePending) return;
    updatePending = true;
    window.requestAnimationFrame(updateHeader);
  }, { passive: true });

  window.addEventListener("pageshow", updateHeader);
  updateHeader();
})();
