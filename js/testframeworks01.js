var ReservationSaver = function() {
  this.saveReservation = function(reservation) {};
};

var createReservation = function (passenger, flight, saver) {
  var reservation = { 
    passengerInformation: passenger, 
    flightInformation: flight 
  };

  saver.saveReservation(reservation);
};