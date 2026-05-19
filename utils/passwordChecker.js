const commonPasswords = [
  "123456",
  "password",
  "12345678",
  "qwerty",
  "admin",
  "letmein"
];
function checkPasswordStrength(password){

    let strength = "Weak";

    if(password.length > 8){
        strength = "Medium";
    }

    if(password.match(/[A-Z]/) &&
       password.match(/[0-9]/) &&
       password.length > 10){

        strength = "Strong";
    }
 let isCommon = commonPasswords.includes(password);

    return {
        strength,
        isCommon
    };
}

   module.exports = checkPasswordStrength;