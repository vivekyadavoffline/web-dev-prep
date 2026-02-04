// let a = document.getElementsByClassName("box");
// console.log(a);
// document.getElementById("pink");
// console.log(pink);
// pink.style.backgroundColor = "pink";
// a[4].style.backgroundColor = "red";
// //document.querySelectorAll(".box").forEach(e =>{e.style.backgroundColor = "yellow"});
// a = [1,2,3,4,5];
// a.forEach(e =>{console.log(e)});
// document.getElementsByTagName("div");
let a = 6
function factorial(n){
 let arr =Array.from(Array(n+1).keys())
    console.log(arr.slice(1,)); // Print array excluding 0
 let c = arr.slice(1,).reduce((a,b) =>{
    return a*b
 } )
    console.log(c);
}
factorial(a);
factorial(a);  