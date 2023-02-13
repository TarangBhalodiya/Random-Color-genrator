const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh");
const maxPalletBox = 32;

refreshBtn.addEventListener("mousemove", (e) => {
    console.log(e.type)
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",2 , .5)";
});

function refrechColor(){
    container.innerHTML = "";
    for (let i = 0; i < maxPalletBox; i++) {
        //generating random hex color code
        let rendomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        rendomHex = `#${rendomHex.padStart(6, "0")}`
        //creating lis
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML=` <div class='rect-box' style = 'background-color: ${rendomHex}'></div> <span class='hex-value'>${rendomHex}</span> `;
        container.appendChild(color);
        // adding click event to current li to copy text
        color.addEventListener("click", () => copycolor(color, rendomHex))
    }
    // alert("hiiiii")    
}
refrechColor();
const copycolor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // copying hex value and update text to copied
    navigator.clipboard.writeText(hexVal).then(() =>{
        colorElement.innerText = "Copied"
        // chaning text to original hex value
         setTimeout(() => colorElement.innerText =hexVal,1000)
    }).catch(() => alert("failed to copy color code"))
}
refreshBtn.addEventListener("click", refrechColor)
