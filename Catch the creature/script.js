var btn = document.querySelector("button")
var bkc = document.querySelectorAll("#screen")
var playground = document.querySelector("#playground")
var nunn = document.querySelectorAll("#elem-container")
var selected = ""

btn.addEventListener("click",function(){
    bkc[1].style.transform = "translateY(-100%)"
    nunn.forEach(function(elem){
        
elem.addEventListener("click",function(){
    bkc[2].style.transform = "translateY(-200%)"
    selected =elem.childNodes[3].getAttribute("src")
    console.log(elem.childNodes)
    var newImg = document.createElement("img")
    newImg.setAttribute("src",selected)
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    newImg.style.left = x+"%"
    newImg.style.left = y+"%"
    newImg.style.rotate = rot+"deg"
    playground.appendChild(newImg)
    
})
    })

})

