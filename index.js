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
    "The lungs are a pair of spongy, air-filled organs located on either side of the chest (thorax). The trachea (windpipe) conducts inhaled air into the lungs through its tubular branches, called bronchi. ", 
    "A brain is an organ that serves as the center of the nervous system in all vertebrate and most invertebrate animals. It is located in the head, usually close to the sensory organs for senses such as vision.", 
    "The liver is a large, meaty organ that sits on the right side of the belly. Weighing about 3 pounds, the liver is reddish-brown in color and feels rubbery to the touch. Normally you can't feel the liver, because it's protected by the rib cage.",
    "The heart is a muscular organ about the size of a fist, located just behind and slightly left of the breastbone. The heart pumps blood through the network of arteries and veins called the cardiovascular system.", 
    "The kidneys are a pair of bean-shaped organs on either side of your spine, below your ribs and behind your belly. Each kidney is about 4 or 5 inches long, roughly the size of a large fist.",
    "The stomach is a muscular organ located on the left side of the upper abdomen. The stomach receives food from the esophagus. As food reaches the end of the esophagus, it enters the stomach through a muscular valve called the lower esophageal sphincter.",
    "The pancreas is about 6 inches long and sits across the back of the abdomen, behind the stomach. The head of the pancreas is on the right side of the abdomen and is connected to the duodenum.",
    "The male reproductive system is mostly located outside of the body. These external organs include the penis, scrotum and testicles. Internal organs include the vas deferens, prostate and urethra.",
    "The intestines are a long, continuous tube running from the stomach to the anus. Most absorption of nutrients and water happen in the intestines. The intestines include the small intestine, large intestine, and rectum.",
    "The female reproductive organs include several key structures, such as the ovaries, uterus, vagina, and vulva. These organs are involved in fertility, conception, pregnancy, and childbirth.emale reproductive system"
];

const imageSource = [
    "./pictures/gif/lungs.gif", "./pictures/brain.gif", "./pictures/liver.jpg",
    "./pictures/gif/heart.gif", "./pictures/kidney.jpg", "./pictures/gif/stomach.gif",
    "./pictures/gif/pancreas.gif", "./pictures/male.jpg", "./pictures/gif/intenstine.gif",
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
    button.addEventListener("touchstart", e=> {
        container2.appendChild(sv); container2.appendChild(voiceList); 
        box.style.margin = "9.5vh";
        speechSynthesis.cancel();
        count = 0;
        humanbody.classList.remove("invisible");
        box.removeChild(image);
        box.removeChild(para);
        box.removeChild(button);
    });
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
                text = description[index];
                speak(text, rate, pitch, volume);
              }else{
                console.log(' Speech Synthesis Not Supported 😞'); 
              }

              container2.removeChild(voiceId); container2.removeChild(sv);

            getOrgan(index);
            return true;
        }
    })
}
    console.log(found);
});
