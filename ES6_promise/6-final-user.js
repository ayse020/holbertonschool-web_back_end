import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const arr = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        arr.push({
          status: result.status,
          value: result.value,
        });
      } else {
        arr.push({
          status: result.status,
          value: `Error: ${result.reason.message}`,
        });
      }
    });
    return arr;
  });
}
