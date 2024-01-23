function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector("div#inputs textarea");
  let allRestaurants = {};
  const outputRestaurant = document.getElementById("bestRestaurant");
  const outputWorkers = document.getElementById("workers");

  function onClick() {
    const text = JSON.parse(input.value);

    for (let information of text) {
      const [restaurantName, data] = information.split(" - ");

      const workerData = gettingWorkersData(data);
      const sortedWorkingData = workerData.sort((a, b) => b.salary - a.salary);
      const avgSalary = calculatingAverageSalary(sortedWorkingData);

      if (!allRestaurants.hasOwnProperty(restaurants)) {
        allRestaurants[restaurantName] = restaurants(
          avgSalary,
          sortedWorkingData
        );
      }
    }

    const bestRes = gettingBestRestaurant(allRestaurants);

    bestRes.forEach(element => {
      let [name, data] = element;

      
    })
  }

  function gettingBestRestaurant(allRestaurants) {
    const restaurants = Object.entries(allRestaurants);
    let result = restaurants.sort((a, b) => b[1].avgSalary - a[1].avgSalary);
    return result[0];
  }

  function calculatingAverageSalary(workers) {
    let total = 0;

    workers.forEach((element) => {
      total += element.salary;
    });

    return total / workers.length;
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

  function restaurants(avgSalary, workers) {
    let state = {
      avgSalary,
      bestSalary: workers[0].salary,
      workersData: workers,
    };
    return state;
  }
}

//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
