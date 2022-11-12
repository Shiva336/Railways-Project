var lungCoordinate = [
    
];

document.addEventListener("touchmove", e => {
    let X = Math.floor(e.touches[0].clientX);
    let Y = Math.floor(e.touches[0].clientY);
    
    var found = lungCoordinate.findIndex((lung, index)=> {
        if(lung.x == X && lung.y == Y)
            return true;
    })

    // lungCoordinate.push({x:X,y:Y});
    console.log(found);
})

//insert inside the div container another image of the required organ along with the speech output and make human body invisible