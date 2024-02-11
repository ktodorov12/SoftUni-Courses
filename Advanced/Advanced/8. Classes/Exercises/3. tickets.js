function solve(ticketDescriptions, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  const allTickets = [];

  ticketDescriptions.forEach((ticket) => {
    const [dest, price, status] = ticket.split("|");
    allTickets.push(new Ticket(dest, price, status));
  });

  function sorter(a, b) {
    const solvePattern =
      criteria != "price"
        ? a[criteria].localeCompare(b[criteria])
        : a.price - b.price;

    return solvePattern;
  }

  const sorted = allTickets.sort(sorter);
  return sorted;
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
