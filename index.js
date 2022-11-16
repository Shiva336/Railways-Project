const box = document.querySelector("div.box");
const sv = document.getElementById("selectvoice");
const container = document.querySelector("div.container");
const container2 = document.querySelector("div.container2");
const humanbody= document.querySelector("img.humanbody");
const lungs = document.getElementById("lungs");
const brain = document.getElementById("brain");
const liver = document.getElementById("liver");
const heart = document.getElementById("heart");
const kidney = document.getElementById("kidney");
const stomach = document.getElementById("stomach");
const pancreas = document.getElementById("pancreas")
const malerep = document.getElementById("malerep")
const intestine = document.getElementById("intestine")
const femrep = document.getElementById("femrep");
const voiceId = document.getElementById("voiceList");

const c1 = lungs.getBoundingClientRect();
const c2 = brain.getBoundingClientRect();
const c3 = liver.getBoundingClientRect();
const c4 = heart.getBoundingClientRect();
const c5 = kidney.getBoundingClientRect();
const c6 = stomach.getBoundingClientRect();
const c7 = pancreas.getBoundingClientRect();
const c8 = malerep.getBoundingClientRect();
const c9 = intestine.getBoundingClientRect();
const c10 = femrep.getBoundingClientRect();

let count = 0;
var coordinates = [];
coordinates.push(c1);
coordinates.push(c2);
coordinates.push(c3);
coordinates.push(c4);
coordinates.push(c5);
coordinates.push(c6);
coordinates.push(c7);
coordinates.push(c8);
coordinates.push(c9);
coordinates.push(c10);

var voiceList = document.querySelector('#voiceList');
var voices = [];
var synth = window.speechSynthesis;

PopulateVoices();
        if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
        }
function PopulateVoices(){
    voices = speechSynthesis.getVoices();
    let i=0;
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
       voices.forEach((voice)=>{
      
                var listItem = document.createElement('option');
                listItem.textContent = voice.name;
                listItem.setAttribute('data-lang', voice.lang);
                listItem.setAttribute('data-name', voice.name);
                voiceList.appendChild(listItem);
            
            i++;
       });
      voiceList.selectedIndex = selectedIndex;
}

function speak(text, rate, pitch, volume) {
    var toSpeak = new SpeechSynthesisUtterance(text);
     toSpeak.volume = volume; // From 0 to 1
     toSpeak.rate = rate; // From 0.1 to 10
     toSpeak.pitch = pitch; // From 0 to 2
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            voices.forEach((voice)=>{
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });            synth.speak(toSpeak);
  }

const description = [
    "Lungs", "This is a brain", "This is a liver",
    "This is a heart", "This is a kidney","This is a stomach",
    "This is a pancreas","This is a male reproductive system",
    "This is an intestine","This is a female reproductive system"
];

const imageSource = [
    "./pictures/lungs.jpg", "./pictures/brain.gif", "./pictures/liver.jpg",
    "./pictures/heart.jpg", "./pictures/kidney.jpg", "./pictures/stomach.jpg",
    "./pictures/pancreas.jpg", "./pictures/male.jpg", "./pictures/intestine.jpg",
    "./pictures/female.jpg",
];

function getOrgan(index){
    box.style.margin = "0";
    const image = document.createElement("img");
    const button = document.createElement("button");
    const para = document.createElement("p");
    image.classList.add("organs");
    image.src = imageSource[index];
    box.appendChild(image);

    const text = document.createTextNode(description[index]);
    para.appendChild(text);
    para.classList.add("para");
    box.appendChild(para);

    var btext = document.createTextNode("Go Back");
    button.appendChild(btext);
    button.classList.add("btn");
    button.ontouchstart = ()=> {
        container2.appendChild(sv); container2.appendChild(voiceList); 
        box.style.margin = "9.5vh";
        count = 0;
        humanbody.classList.remove("invisible");
        box.removeChild(image);
        box.removeChild(para);
        box.removeChild(button);
    }
    box.appendChild(button);
}

document.addEventListener("touchstart", e => {
    if(count == 0) {
    let X = Math.floor(e.touches[0].clientX);
    let Y = Math.floor(e.touches[0].clientY);
    
    var found = coordinates.findIndex((organ, index)=> {
        if((X >= organ.left && X <= organ.right && Y >= organ.top && Y <= organ.bottom ))
        {
            count++;
            humanbody.classList.add("invisible");
            if ('speechSynthesis' in window) {
                let rate = 1, pitch = 2, volume = 1;
                if(voiceList.selectedIndex==1||voiceList.selectedIndex==2)
                    text = "ശ്വാസകോശം ഒരു സ്പോഞ്ച് പോലെയാണ്";
                else    
                    text = description[index];
                speak(text, rate, pitch, volume);
              }else{
                console.log(' Speech Synthesis Not Supported 😞'); 
              }

              container2.removeChild(voiceId); container2.removeChild(sv);
            //   setTimeout(()=> {
            //     getOrgan(index);
            // },1000);

            getOrgan(index);
            return true;
        }
    })
}
    console.log(found);
});