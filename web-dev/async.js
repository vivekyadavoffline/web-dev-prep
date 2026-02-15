async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 20);
  });
}
async function main() {
console.log("Fetching data...");
console.log("do something else while waiting for data...");
let data = await getData();
// data.then((v) => {
// console.log("load data")
// console.log(data);
// console.log("process data ")
// console.log("done")
// });

console.log("load data");
console.log(data);
console.log("process data ");
console.log("done");
}
main();