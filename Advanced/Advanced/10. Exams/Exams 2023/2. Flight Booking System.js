class FlightBookingSystem {
  bookingsCount = 0;
  flights = [];
  bookings = [];
  constructor(agencyName) {
    this.agencyName = agencyName;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    const found = this._find(flightNumber);

    if (found) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }

    this.flights.push({
      flightNumber,
      destination,
      departureTime,
      price: Number(price),
    });

    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    const found = this._find(flightNumber);

    if (!found) {
      return `Flight ${flightNumber} is not available for booking.`;
    }

    this.bookings.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    const indexOfFlight = this.bookings.findIndex(
      (booking) =>
        booking.passengerName === passengerName &&
        booking.flightNumber === flightNumber
    );

    if (indexOfFlight == -1) {
      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }

    this.bookings.splice(indexOfFlight, 1);
    this.bookingsCount--;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookings.length == 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    let expensiveBooking = ["Expensive bookings:"];
    let cheapBookings = ["Cheap bookings:"];
    let allBooking = [`All bookings(${this.bookingsCount}):`];

    this.bookings.forEach((book) => {
      allBooking.push(
        `${book.passengerName} booked for flight ${book.flightNumber}.`
      );
      let correspondingFlight = this._find(book.flightNumber);

      if (correspondingFlight.price <= 100) {
        cheapBookings.push(
          `${book.passengerName} booked for flight ${book.flightNumber}.`
        );
      } else if (correspondingFlight.price > 100) {
        expensiveBooking.push(
          `${book.passengerName} booked for flight ${book.flightNumber}.`
        );
      }
    });

    if (criteria == "all") {
      return allBooking.join("\n");
    }

    if (criteria == "cheap") {
      if (cheapBookings.length <= 1) {
        return "No cheap bookings found.";
      }
      return cheapBookings.join("\n");
    }

    if (criteria == "expensive") {
      if (expensiveBooking.length <= 1) {
        return "No expensive bookings found.";
      }
      return expensiveBooking.join("\n");
    }
  }

  _find(number) {
    return this.flights.find((flight) => flight.flightNumber == number);
  }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
