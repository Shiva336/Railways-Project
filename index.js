const box = document.getElementById("lungs");
const c = box.getBoundingClientRect();


var coordinates = [];
coordinates.push(c);

document.addEventListener("touchstart", e => {
    let X = Math.floor(e.touches[0].clientX);
    let Y = Math.floor(e.touches[0].clientY);
    
    var found = coordinates.findIndex((organ, index)=> {
        if((X >= organ.left && X <= organ.right && Y >= organ.top && Y <= organ.bottom ))
        {
            box.style.backgroundColor = "green";
            return true;
        }
    })
    console.log(found);
})

//insert inside the div container another image of the required organ along with the speech output and make human body invisible