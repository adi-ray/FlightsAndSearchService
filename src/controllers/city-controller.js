const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      messsage: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "City creation failed",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      messsage: "City deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "City deletion failed",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      messsage: "City updated successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "City update failed",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      messsage: "City fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      messsage: "City fetch failed",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
