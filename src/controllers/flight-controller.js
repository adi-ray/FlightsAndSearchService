const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      messsage: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "Flight creation failed",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};
