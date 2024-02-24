function solve() {
  const infoBox = document.querySelector("#info .info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  let busStopId = "depot";
  let currentStopName;

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${busStopId}`;

    try {
      const response = await fetch(url);
      const { name, next } = await response.json();
      currentStopName = name;

      infoBox.textContent = `Next stop ${name}`;
      busStopId = next;

      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (err) {
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${currentStopName}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();