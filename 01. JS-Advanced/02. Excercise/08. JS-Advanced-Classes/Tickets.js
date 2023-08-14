function ticket(tickets, typeOfSort) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  let totalTickets = [];
  for (const ticket of tickets) {
    let splited = ticket.split("|");
    let destinatioName = splited[0];
    let price = splited[1];
    let status = splited[2];
    let newTicket = new Ticket(destinatioName, price, status);
    totalTickets.push(newTicket);
  }
  if (typeOfSort === "price") {
    totalTickets.sort((a, b) => a.price + b.price);
  } else if (typeOfSort === "destination") {
    totalTickets.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (typeOfSort === "status") {
    totalTickets.sort((a, b) => a.status.localeCompare(b.status));
  }
  return totalTickets;
}

ticket(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
