(() => {
  const root = document.documentElement;
  if (!root.classList.contains("is-homepage")) return;

  let updatePending = false;
  const collapseDistance = 160;

  function updateHeader() {
    const progress = Math.min(Math.max(window.scrollY, 0) / collapseDistance, 1);
    root.style.setProperty("--header-expansion", String(1 - progress));
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
