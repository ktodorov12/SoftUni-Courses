import { showMonthCallendar } from "./showMonthCallendar.js";

export function showDaysCallendar(dayId, monthId) {
  const day = document.getElementById(dayId);
  day.style.display = "block";
  document.getElementById(monthId).style.display = "none";

  const caption = day.querySelector(".calendar caption");

  caption.addEventListener("click", back);
  function back() {
    showMonthCallendar(monthId);
    day.style.display = "none";
  }
}
