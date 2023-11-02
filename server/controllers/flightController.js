var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: "phKbHk9HCV9BtSIT4AwT03TrHP3oD9JM",
  clientSecret: "52MCNhJ8CC5P6cZT",
});

exports.searchAirportCity = (req, res) => {
  const parameter = req.params.parameter;
  // Which cities or airports start with the parameter variable
  amadeus.referenceData.locations
    .get({
      keyword: parameter,
      subType: Amadeus.location.any,
    })
    .then((response) => {
      res.status(200).json(response.result.data);
    })
    .catch((response) => {
      res.send(response);
    });
};

exports.searchFlights = (req, res) => {
  amadeus.shopping.flightOffersSearch;
  amadeus.referenceData.locations
    .get({
      keyword: "LON",
      subType: "AIRPORT,CITY",
    })
    .then(function (response) {
      console.log("first page: ", response.data.length); // first page
      res.status(200).json(response.data);
      return amadeus.next(response);
    })
    .then(function (nextReponse) {
      console.log("second page:", nextReponse.data.length); // second page
    })
    .catch((responseError) => {
      console.log("error", responseError.code);
    });
};
