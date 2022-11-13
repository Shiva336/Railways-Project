const box = document.querySelector("div.box");
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

document.addEventListener("touchstart", e => {
    let X = Math.floor(e.touches[0].clientX);
    let Y = Math.floor(e.touches[0].clientY);
    
    var found = coordinates.findIndex((organ, index)=> {
        if((X >= organ.left && X <= organ.right && Y >= organ.top && Y <= organ.bottom ))
        {
            if(index == 0){
                lungs.style.backgroundColor = "red";
            }
            else if(index == 1)
            {
                brain.style.backgroundColor = "red";
            }
            else if(index == 2)
            {
                liver.style.backgroundColor = "red";
            }
            else if(index == 3)
            {
                heart.style.backgroundColor = "red";
            }
            else if(index == 4)
            {
                kidney.style.backgroundColor = "red";
            }
            else if(index == 5)
            {
                stomach.style.backgroundColor = "red";
            }
            else if(index == 6)
            {
                pancreas.style.backgroundColor = "red";
            }
            else if(index == 7)
            {
                malerep.style.backgroundColor = "red";
            }
            else if(index == 8)
            {
                intestine.style.backgroundColor = "red";
            }
            else if(index == 9)
            {
                femrep.style.backgroundColor = "red";
            }
            return true;
        }
    })
    console.log(found);
})