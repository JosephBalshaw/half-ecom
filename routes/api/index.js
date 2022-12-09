const router = require("express").Router();
const categoryRoutes = require("./routeCategory");
const productRoutes = require("./routeProduct");
const tagRoutes = require("./routeID");
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
module.exports = router;
