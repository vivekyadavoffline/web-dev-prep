// console.log(" I am learning promises in JavaScript");
// console.log(" m am learning promises in JavaScript");
// setTimeout(() => {
//     console.log("learning promises in JavaScript");
// }, 2000);
// console.log(" kab tak learning promises in JavaScript");
// const callback = (arg) => {
//     console.log(arg)}

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.onload = () => callback("script loaded");
//     sc.src = src;
//     document.body.appendChild(sc);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",callback);
console.log(" I am learning promises in JavaScript");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("random number is less than 0.5");
    }
    else {
    setTimeout(() => {
        console.log("learning promises in JavaScript");
        resolve("yadav");
    }, 2000);}
});
// Assuming 'generateRandomPromise' is the function or Promise that
// is causing the rejection.

  prom1.then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error("Promise rejected:", error); // Handle the rejection here
    // You can also perform other actions, like updating UI,
    // logging to a server, etc.
  });
