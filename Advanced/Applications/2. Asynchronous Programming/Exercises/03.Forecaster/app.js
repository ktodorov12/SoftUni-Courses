attachEvents();

function attachEvents() {
  const weatherBtn = document.getElementById("submit");
  weatherBtn.addEventListener("click", onClick);
}

async function onClick() {
  const inputField = document.getElementById("location").value;
  const url = "http://localhost:3030/jsonstore/forecaster/locations";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const found = data.find((obj) => obj.name == inputField);

    if (!found || !response.ok || !response.status) {
      throw new Error("Location not found");
    }

    currentWeatherCondition(found.code);
    threeDayForecast(found.code);
    document.getElementById("forecast").style.display = "block";
  } catch (err) {
    document.getElementById("forecast").textContent = "Error";
    document.getElementById("forecast").style.display = "block";
  }
}

const symb = {
  Sunny: "\u2600",
  "Partly sunny": "\u26C5",
  Overcast: "\u2601",
  Rain: "\u2614",
};
const degr = String.fromCharCode(176);

async function currentWeatherCondition(code) {
  const currentDiv = document.getElementById("current");
  const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

  const response = await fetch(url);
  const { name, forecast } = await response.json();

  const mainDiv = createEl("div", "forecasts");
  const spanWeatherSym = createEl("span", "condition symbol", symb[forecast.condition]);

  const spanCondition = createEl("span", "condition");
  const spanCreator = (cont) => createEl("span", "forecast-data", cont);
  const spanCity = spanCreator(name);
  const spanDegrees = spanCreator(`${forecast.low}${degr}/${forecast.high}${degr}`);
  const spanWeather = spanCreator(forecast.condition);

  appender(spanCondition, spanCity, spanDegrees, spanWeather);
  appender(mainDiv, spanWeatherSym, spanCondition);
  currentDiv.replaceChildren(mainDiv);

  const labelDiv = createEl("div", "label", "Current conditions");
  currentDiv.prepend(labelDiv);
}

async function threeDayForecast(code) {
  const uppcomingDiv = document.getElementById("upcoming");
  const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

  const response = await fetch(url);
  const { name, forecast } = await response.json();
  
  const [dayOne, dayTwo, dayThree] = forecast.map(spanCreator)
  const mainDiv = createEl("div", "forecast-info");
  appender(mainDiv, dayOne, dayTwo, dayThree)
  uppcomingDiv.replaceChildren(mainDiv);

  const labelDiv = createEl("div", "label", "Three-day forecast");
  uppcomingDiv.prepend(labelDiv);
}

function spanCreatorThreeDay(weather) {
  const mainSpan = createEl("span", "upcoming");
  const symbSpan = createEl("span", "symbol", symb[weather.condition]);
  const dgrSpan = createEl("span", "forecast-data", `${weather.low}${degr}/${weather.high}${degr}`)
  const weatherSpan = createEl("span", "forecast-data", weather.condition);

  appender(mainSpan, symbSpan, dgrSpan, weatherSpan);
  return mainSpan
}

function createEl(type, className, content) {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = content || "";
  return el;
}

function appender(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}