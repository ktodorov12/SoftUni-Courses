import { showDaysCallendar } from "./showDaysCallendar.js";
import { showYearVeiw } from "./showYearView.js";

export function showMonthCallendar(monthId) {
  const month = document.getElementById(monthId);
  month.style.display = "block";
  document.getElementById("years").style.display = "none";

  const caption = month.querySelector(".calendar caption");
  const tbody = month.querySelector(".calendar tbody");

  caption.addEventListener("click", back);
  function back() {
    showYearVeiw();
  }

  tbody.addEventListener("click", showMonth);
  function showMonth(ev) {
    const clickedMonth = ev.target.textContent.trim();

    const monthsData = {
      Jan: `month-${caption.textContent}-1`,
      Feb: `month-${caption.textContent}-2`,
      Mar: `month-${caption.textContent}-3`,
      Apr: `month-${caption.textContent}-4`,
      May: `month-${caption.textContent}-5`,
      Jun: `month-${caption.textContent}-6`,
      Jul: `month-${caption.textContent}-7`,
      Aug: `month-${caption.textContent}-8`,
      Sept: `month-${caption.textContent}-9`,
      Oct: `month-${caption.textContent}-10`,
      Nov: `month-${caption.textContent}-11`,
      Dec: `month-${caption.textContent}-12`,
    };

    showDaysCallendar(monthsData[clickedMonth], monthId);
  }
}
