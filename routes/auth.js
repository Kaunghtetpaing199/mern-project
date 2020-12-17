const { signIn, signUp, signout } = require("../controller/auth");

const router = require("express").Router();

router.post("/signin", signIn);

router.post("/signup", signUp);

router.post("/signout", signout);

module.exports = router;
