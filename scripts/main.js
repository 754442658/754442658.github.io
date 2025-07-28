document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", function () {
    const url = this.dataset.url;
    window.location.href = url;
  });
});
