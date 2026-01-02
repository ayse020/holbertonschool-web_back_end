import signUpUser from "./4-user-promise.js";

signUpUser("Bob", "Dylan")
  .then((data) => console.log(data));
