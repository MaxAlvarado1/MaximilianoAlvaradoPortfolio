document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-toggle]");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-toggle");
      const detail = document.querySelector(`[data-id="${targetId}"]`);
      if (detail) {
        detail.classList.toggle("hidden");
      }
    });
  });
});