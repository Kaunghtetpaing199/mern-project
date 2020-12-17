const { requireSignin } = require("../middlewares/middleware");

const router = require("express").Router();

router.post("/addbooks", requireSignin, (req, res) => {
  res.json({ body: req.body, user: req.user });
});

module.exports = router;
