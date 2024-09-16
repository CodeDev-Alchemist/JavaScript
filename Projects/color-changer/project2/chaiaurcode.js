const buttons = document.querySelectorAll(".button")
const body= document.querySelector("body")

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if(e.target == white) {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        if(e.target == grey) {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if(e.target == yellow) {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        if(e.target == blue) {
            body.style.backgroundColor = e.target.id;
        }

    })
} )