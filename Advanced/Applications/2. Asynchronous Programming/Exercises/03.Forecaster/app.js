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

    currentWeatherCondition(found.code);
    threeDayForecast(found.code);
    document.getElementById("forecast").style.display = "block";
  } catch (err) {}
}

async function currentWeatherCondition(code) {
  const currentDiv = document.getElementById("current");
  const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

  const response = await fetch(url);
  const { name, forecast } = await response.json();

  const symb = {
    Sunny: /&#x2600/,
    "Partly sunny": /&#x26C5/,
    Overcast: /&#x2601/,
    Rain: /&#x2614/,
  };
  const degr = /&#176/;

  const mainDiv = createEl("div", "forecasts");
  const spanWeatherSym = createEl(
    "span",
    "condition symbol",
    symb[forecast.condition]
  );

  const spanCondition = createEl("span", "condition");
  const spanCreator = (cont) => createEl("span", "forecast-data", cont);
  const spanCity = spanCreator(name);
  const spanDegrees = spanCreator(
    `${forecast.low}${degr}/${forecast.high}${degr}`
  );
  const spanWeather = spanCreator(forecast.condition);

  appender(spanCondition, spanCity, spanDegrees, spanWeather);
  appender(mainDiv, spanWeatherSym, spanCondition);
  currentDiv.appendChild(mainDiv);
}

async function threeDayForecast(code) {
  const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

  const response = await fetch(url);
  const { name, forecast } = await response.json();
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
