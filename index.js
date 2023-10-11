//song array
let array=[
    {songName:"Deep Blue",filePath:"",coverPath:""},
    {songName:"Deep Blue",filePath:"",coverPath:""},
    {songName:"Deep Blue",filePath:"",coverPath:""},
    {songName:"Deep Blue",filePath:"",coverPath:""},
    {songName:"Deep Blue",filePath:"",coverPath:""},
    {songName:"Deep Blue",filePath:"",coverPath:""}
];
//THE get elements
let audioElement = new Audio("./songs/William Black - Deep Blue (Lyrics) ft. Monika Santucci (320 kbps).mp3");
let masterPlay=document.getElementById("play");
let progressBar=document.getElementById("progress-bar");

//play and pause
masterPlay.addEventListener("click",function(){
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }
});

//progress bar auto move
audioElement.addEventListener("timeupdate",function(){
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
});

//progress bar changes song time with change in progress
progressBar.addEventListener('change' , function(){
    console.log(audioElement.currentTime);
    console.log(progressBar.value);
    console.log(audioElement.duration);
    let ac = parseInt((progressBar.value * audioElement.duration)/100);
    audioElement.currentTime= ac;
    console.log(ac);
    console.log(audioElement.currentTime)

});

//change song from your library
let newSong = document.querySelectorAll(".l-grid");
for (let i=0;i<newSong.length;i++){
    newSong[i].addEventListener("click",()=>{
        let songName = newSong[i].children[1];
        let songArtist = newSong[i].children[2];
        let clickInnerSong = songName.innerHTML;
        let clickInnerArtist = songArtist.innerHTML;
        changeSong(clickInnerSong,clickInnerArtist); 
    })
}

function changeSong(song,artist){
    let a = document.querySelector("#cur-s-name");
    let b =document.querySelector("#cur-s-artist");
    let c = document.querySelector("#cur-s-img");
    a.innerHTML=song;
    b.innerHTML=artist;
    switch(song){
        case "Catch My Breath":
            c.style.backgroundImage = "url(./cover/catch-my-breath.png)";
            audioElement = new Audio("./songs/N3WPORT - Catch My Breath (feat. Leila Pari) (320 kbps).mp3");
            break;

        case "Show Up":
            c.style.backgroundImage = "url(./cover/show-up.png)";
            audioElement = new Audio("./songs/Virtual Riot - Show Up (ft. Virus Syndicate) (320 kbps).mp3");
            break;

        case "SLeepless":
            c.style.backgroundImage = "url(./cover/sleepless.png)";
            audioElement = new Audio("./songs/Pixel Terror, Chime & Teminite - Sleepless [Monstercat Release] (320 kbps).mp3");
            break;

        case "Isohel":
            c.style.backgroundImage = "url(./cover/isohel.png)";
            audioElement = new Audio("./songs/EDEN - isohel (official music video) (320 kbps).mp3");
            break;
            
        case "Anti-Hero-Remix":
            c.style.backgroundImage = "url(./cover/anti-hero.png)";
            audioElement = new Audio("./songs/Taylor Swift - Anti-Hero (ILLENIUM Remix) (320 kbps).mp3");
            break;

        case "Khaabon ke Parinday":
            c.style.backgroundImage = "url(./cover/znmd.png)";
            audioElement = new Audio("./songs/Lyrical _ Khaabon Ke Parinday Song _ Zindagi Na Milegi Dobara _ Hrithik Roshan, Kartina Kaif (320 kbps).mp3");
            break;

        case "Deep Blue":
            c.style.backgroundImage = "url(./cover/Deep-Blue.png)";
            audioElement = new Audio("./songs/William Black - Deep Blue (Lyrics) ft. Monika Santucci (320 kbps).mp3");
            break;
    }
    //change in like color
    if(song in likedArray){
        like.style.color = "#7CFC00";
    }
    else{
        like.style.color = "#f3f4f7";
    }
    
}

//changing greeting message with respect to real time
let message = document.querySelector(".gm");
let now = new Date();
const greet = now.getHours();
if(greet<5 || greet>21){
    message.innerHTML = "Good night"
}
else if(greet>6 && greet<12){
    message.innerHTML = "Good morning"
}
else if(greet >12 && greet<17){
    message.innerHTML = "Good afternoon"
}
else if(greet >17 && greet < 21){
    message.innerHTML = "Good evening"
}


//changing heart color to green and adding to liked songs
let likedArray={};
let like = document.querySelector(".fa-heart");

like.addEventListener("click",()=>{
    let liked_Song = document.querySelector("#cur-s-name").innerHTML;
    if(like.style.color = "#f3f4f7" && !(liked_Song in likedArray)){
        likedArray[liked_Song] = "true";
        like.style.color = "#7CFC00";
        console.log(likedArray)

    }
    else{
        like.style.color = "#f3f4f7";
        delete likedArray[liked_Song];
    }    
})
