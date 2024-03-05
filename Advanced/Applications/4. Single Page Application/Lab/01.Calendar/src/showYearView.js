export function showYearVeiw(e) {
  e?.preventDefault();

  document.getElementById("years").style.display = "block";

  document
    .querySelectorAll(".monthCalendar")
    .forEach((s) => (s.style.display = "none"));

  document
    .querySelectorAll(".daysCalendar")
    .forEach((d) => (d.style.display = "none"));
}
