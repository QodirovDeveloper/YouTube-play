const open = document.getElementById("open");
    const close = document.getElementById("close");
    const modal = document.getElementById("modal_overlay");
    const body = document.body;

    open.addEventListener("click", () =>
    {
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100", "pointer-events-auto");
      body.classList.add("overflow-hidden");  // Scroll ni o'chirish
    });

    close.addEventListener("click", () =>
    {
      modal.classList.remove("opacity-100", "pointer-events-auto");
      modal.classList.add("opacity-0", "pointer-events-none");
      body.classList.remove("overflow-hidden");  // Scroll ni tiklash
    });