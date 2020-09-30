var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    // if(character.classList.contains("animate")){
    //     return
    // }
  
    // character.classList.add("animate");

    // setTimeout(()=>{
    //     character.classList.remove("animate");
    // },300);

    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over. Score: "+Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1.5s infinite linear";
        block.style.display = "block"
    }
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);
