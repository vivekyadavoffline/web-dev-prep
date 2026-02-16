console.log('java started');




async function getsongs() {
    let a = await fetch("songs/");
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)

        }
    }
    return songs
}
async function main(){
let songs = await getsongs()
console.log(songs)

var audio = new Audio(songs[0]);
    audio.play();

}
main();