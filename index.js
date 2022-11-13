const box = document.querySelector("div.box");
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

const description = [
    "This is a lung", "This is a brain", "This is a liver",
    "This is a heart", "This is a kidney","This is a stomach",
    "This is a pancreas","This is a male reproductive system",
    "This is an intestine","This is a female reproductive system"
];

const imageSource = [
    "./pictures/lungs.jpg", "./pictures/brain.jpg", "./pictures/liver.jpg",
    "./pictures/heart.jpg", "./pictures/kidney.jpg", "./pictures/stomach.jpg",
    "./pictures/pancreas.jpg", "./pictures/male.jpg", "./pictures/intestine.jpg",
    "./pictures/female.jpg",
]

function getOrgan(index){
    const image = document.createElement("img");
    image.classList.add("organs");
    image.src = imageSource[index];
    box.appendChild(image);

    const para = document.createElement("p");
    const text = document.createTextNode(description[index]);
    para.appendChild(text);
    para.classList.add("para");
    box.appendChild(para);
}

document.addEventListener("touchstart", e => {
    let X = Math.floor(e.touches[0].clientX);
    let Y = Math.floor(e.touches[0].clientY);
    
    var found = coordinates.findIndex((organ, index)=> {
        if((X >= organ.left && X <= organ.right && Y >= organ.top && Y <= organ.bottom ))
        {
            humanbody.style.transform = "translate(-100%,-100%)";
            getOrgan(index);
            return true;
        }
    })
    console.log(found);
})