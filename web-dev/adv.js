// async function sleep() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("done sleeping");
//         }, 2000);
//     });
// }

// (async function main() {
//     // let a = await sleep();
//     // console.log(a);

//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3,
//     };

//     let { a, c } = obj;
//     console.log(a, c);
// })();

var arr =  [1, 2, 3, 4, 5];
console.log(sum(arr[0], arr[1], arr[2], arr[3], arr[4]));
console.log(sum(...arr));
function sum(a, b, c, d, e) {
    return a + b + c + d + e;}