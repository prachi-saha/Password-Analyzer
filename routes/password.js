const express = require("express");
const bcrypt = require("bcrypt");
const checkPasswordStrength = require("../utils/passwordChecker");
const router = express.Router();

router.post("/analyze", async (req, res) => {
    const { password } = req.body;
if (!password) {
        return res.status(400).json({ message: "Password required" });
    }
 const result = checkPasswordStrength(password);

let warning = "";

if (result.isCommon) {
    warning = "This password is too common. Please choose a stronger one.";
}
 const hashedPassword = await bcrypt.hash(password, 10);

    res.json({
        passwordLength: password.length,
        strength: result.strength,
        warning:warning,
        hashedPassword: hashedPassword
    });
});
module.exports = router;