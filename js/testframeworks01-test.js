describe('createReservation(passenger, flight)', function() {
  var testPassenger = null,
      testFlight = null,
      testReservation = null,
      testSaver = null;

  beforeEach(function() {
    testPassenger = { firstName: "윤지", lastName: "김" };
    testFlight = { number: "3443", carrier: "대한항공", destination: "울산" };

    testSaver = new ReservationSaver();
    spyOn(testSaver, "saveReservation");

    testReservation = createReservation(testPassenger, testFlight, testSaver);    
  });


  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다', function() {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });


  it('주어진 flight를 flightInformation프로퍼티에 할당한다', function() {
    expect(testReservation.flightInformation).toBe(testFlight);
  });

  it('예약정보를 저장한다', function() {
    expect(testSaver.saveReservation).toHaveBeenCalled();
  });

});

