console.log("Starting loop... yeah im started");
let a =1;
for( let i = 0; i < 10; i++){
    console.log(a+i);
}
let obj = {
    name: "Loop Object",
    type: "Example",
    why: "To demonstrate loops"

}
for( let key in obj){
    const element = obj[key];
    console.log(key, element);
} 
for ( const c of "Looping"){
    console.log(c);
}
let i = 0;
while( i < 6){
    console.log(i);
    i++;
}
