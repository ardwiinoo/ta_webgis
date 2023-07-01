const GisController = require("../controllers/GisController");
const AuthController = require("../controllers/AuthController");
const router = require('express').Router();

router.get("/v1/location", GisController.getAllLocation);
router.get("/v1/location/:id", GisController.getLocationById);
router.post("/v1/location/nearest", GisController.getNearestLocation);

router.post("/v1/login", AuthController.userLogin);
router.post("/v1/register", AuthController.userRegister);

module.exports = router;