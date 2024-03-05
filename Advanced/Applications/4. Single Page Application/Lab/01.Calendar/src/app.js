import { showYearVeiw } from "./showYearView.js";
import { showMonthCallendar } from "./showMonthCallendar.js";
showYearVeiw();

const i = document.getElementById("years");
i.addEventListener("click", onCLick);

function onCLick(e) {
  e.preventDefault();
  const clickedYear = e.target.textContent.trim();

  const years = {
    2020: "year-2020",
    2021: "year-2021",
    2022: "year-2022",
    2023: "year-2023",
  };

  showMonthCallendar(years[clickedYear], e);
}
