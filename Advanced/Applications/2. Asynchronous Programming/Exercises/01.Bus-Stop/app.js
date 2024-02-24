async function getInfo() {
  const id = document.getElementById("stopId").value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;

  const busStop = document.getElementById("stopName");
  const ulBuses = document.getElementById("buses");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw "Error";
    }
    const data = await response.json();
    const { name, buses } = data;

    busStop.textContent = name;
    ulBuses.replaceChildren(...Object.entries(buses).map(busData));
  } catch (error) {
    busStop.textContent = "Error";
    ulBuses.replaceChildren();
  }
}

function busData(data) {
  const [name, timeOfArr] = data;

  const li = document.createElement("li");
  li.textContent = `Bus ${name} arrives in ${timeOfArr} minutes`;
  return li
}
