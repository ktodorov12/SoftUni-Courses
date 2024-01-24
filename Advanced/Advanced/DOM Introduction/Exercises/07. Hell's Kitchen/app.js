function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  const input = document.querySelector("div#inputs textarea");
  const outputRestaurant = document.querySelector("#bestRestaurant p");
  const outputWorkers = document.querySelector("#workers p");

  function onClick() {
    
    let allRestaurants = {};
    const text = JSON.parse(input.value);

    text.forEach(information => {
      const [nameRes, data] = information.split(" - ");
      const workerData = gettingWorkersData(data);
  
      if (!allRestaurants.hasOwnProperty(nameRes)) {
        allRestaurants[nameRes] = restaurants(workerData);
      } else {
        let newWorkers = allRestaurants[nameRes].workersData.concat(workerData);
        allRestaurants[nameRes] = restaurants(newWorkers);
      }

    });

    const [bestResName, bestResData] = gettingBestRestaurant(allRestaurants);

    let bestResWorkers = bestResData.workersData.reduce((result, el) => {
      let { name, salary } = el;
      result += `Name: ${name} With Salary: ${salary} `;
      return result
    }, "");

    outputRestaurant.textContent = `Name: ${bestResName} Average Salary: ${bestResData.avgSalary.toFixed(2)} Best Salary: ${bestResData.bestSalary.toFixed(2)}`;
    outputWorkers.textContent = bestResWorkers;
  }

  function gettingBestRestaurant(allRestaurants) {
    const restaurants = Object.entries(allRestaurants);
    let result = restaurants.sort((a, b) => b[1].avgSalary - a[1].avgSalary);
    return result[0];
  }

  function calculatingAverageSalary(workers) {
    return workers.reduce((total, worker) => total + worker.salary, 0) / workers.length;
  }

  function gettingWorkersData(workerData) {
    let pairs = workerData.split(", ");

    const workers = [];
    for (let el of pairs) {
      let [workerName, salary] = el.split(" ");
      salary = Number(salary);
      workers.push({ name: workerName, salary: salary });
    }

    return workers;
  }

  function restaurants(workerData) {
    const sortedWorkingData = workerData.sort((a, b) => b.salary - a.salary);
    const avgSalary = calculatingAverageSalary(sortedWorkingData);
  
    let state = {
      avgSalary,
      bestSalary: sortedWorkingData[0].salary,
      workersData: sortedWorkingData,
    };
    return state;
  }
}

//["PizzaHut - Peter 500, George 300, Mark 800", "PizzaHut - Bob 1300, Joe 780, Jane 660"]
