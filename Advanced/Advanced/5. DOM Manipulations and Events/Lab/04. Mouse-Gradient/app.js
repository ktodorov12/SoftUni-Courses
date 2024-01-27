function attachGradientEvents() {
  const gradientBox = document.getElementById("gradient");
  const result = document.getElementById("result");
  gradientBox.addEventListener("mousemove", showPercent);
  gradientBox.addEventListener("mouseout", () => {
    result.textContent = "Mouse Out!";
  });

  function showPercent(event) {
    let width = event.target.clientWidth;
    let percent = Math.trunc((event.offsetX / width) * 100);
    result.textContent = `${percent}%`;
  }
}
