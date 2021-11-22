const characterDataSanta = {
    arrImgs: ["twalkingse0001.png", "twalkingse0002.png", "twalkingse0003.png", "twalkingse0004.png", "twalkingse0005.png", 
                "twalkingse0006.png", "twalkingse0007.png", "twalkingse0008.png", "twalkingse0009.png", "twalkingse0010.png", "twalkingse0011.png"],
    poseNumber: 0,
    elem: document.querySelector("#man"),
    screenWidth: document.querySelector("#christmas").clientWidth,
    screenHeight: document.querySelector("#christmas").scrollHeight,
    x: 0, 
    y: document.querySelector("#christmas").scrollHeight - 75,
    timerId: null
}    
function move() {
    characterDataSanta.timerId = setInterval (frame, 150);
}
function frame () {
    if (characterDataSanta.x > characterDataSanta.screenWidth - 150){
        characterDataSanta.x = 5;
    } else {
        characterDataSanta.x += 5;
        characterDataSanta.elem.style.top = characterDataSanta.y + "px";
        characterDataSanta.elem.style.left = characterDataSanta.x + "px";
        characterDataSanta.elem.src = 
            "theme\\" + characterDataSanta.arrImgs[characterDataSanta.poseNumber];
        console.log(characterDataSanta.elem.src);
        characterDataSanta.poseNumber = (characterDataSanta.poseNumber + 1) % 8;
    }
}
const characterDataSanta2 = {
     arrImgs1: ["trunningw0000.png", "trunningw0001.png", "trunningw0002.png", "trunningw0003.png", "trunningw0004.png", "trunningw0005.png", "trunningw0006.png", 
     "trunningw0007.png", "trunningw0008.png", "trunningw0009.png", "trunningw0010.png", "trunningw0011.png"],
    poseNumber: 0,
    elemm: document.querySelector("#animal"),
    screenWidth: document.querySelector("#christmas").clientWidth,
    screenHeight: document.querySelector("#christmas").scrollHeight,
    x: 0,
    y:document.querySelector("#christmas").scrollHeight - 25,
    timerId: null
}
function myMove () {
    characterDataSanta2 = setInterval (myFrame, 75)
}
function myFrame () {
    if (characterDataSanta2.x < 150){
        characterDataSanta2.x = characterDataSanta2.screenWidth / 2 - 75;
    } else {
        characterDataSanta2.x -= 5;
        characterDataSanta2.elemm.style.top = characterDataSanta2.y + "px";
        characterDataSanta2.elemm.style.left = characterDataSanta2.x + "px";
        characterDataSanta2.elemm.src = 
            "theme\\" + characterDataSanta2.arrImgs1[characterDataSanta2.poseNumber];
        console.log(characterDataSanta2.elemm.src);
        characterDataSanta2.poseNumber = (characterDataSanta2.poseNumber + 1) % 8;
    }
}
const characterDiagonal = {
    arrImgs2: ["tdrachenn0000.png", "tdrachenn0001.png", "tdrachenn0002.png", "tdrachenn0003.png", "tdrachenn0004.png", "tdrachenn0005.png", 
                "tdrachenn0006.png", "tdrachenn0007.png", "tdrachenn0008.png"],
   poseNumber: 0,
   elemmm: document.querySelector("#diagonal"),
   screenWidth: document.querySelector("#christmas").clientWidth,
   screenHeight: document.querySelector("#christmas").scrollHeight,
   x:document.querySelector("#christmas").scrollHeight + 100,
   y: 0,
   timerId: null
}
function myMove2 () {
   characterDiagonal = setInterval (myFrame2, 150)
}
function myFrame2 () {
   if (characterDiagonal.y < 150){
       characterDiagonal.x = characterDiagonal.screenWidth -200;
       characterDiagonal.y = characterDiagonal.screenHeight;
   } else {
       console.log()
       characterDiagonal.x -= 5;
       characterDiagonal.y -= 5;
       characterDiagonal.elemmm.style.top = characterDiagonal.y + "px";
       characterDiagonal.elemmm.style.left = characterDiagonal.x + "px";
       characterDiagonal.elemmm.src = 
           "theme\\" + characterDiagonal.arrImgs2[characterDiagonal.poseNumber];
       console.log(characterDiagonal.elemmm.src);
       characterDiagonal.poseNumber = (characterDiagonal.poseNumber + 1) % 8;
   }
}

const characterRandom = {
    arrImgs3: ["tattacks0000.png", "tattacks0001.png","tattacks0002.png","tattacks0003.png", "tattacks0004.png", "tattacks0005.png", "tattacks0006.png",
    "tattacks0007.png", "tattacks0008.png", "tattacks0009.png", "tattacks0010.png", "tattacks0011.png", "tattacks0012.png"],
   poseNumber: 0,
   elemmmm: document.querySelector("#random"),
   screenWidth: document.querySelector("#christmas").clientWidth,
   screenHeight: document.querySelector("#christmas").scrollHeight,
   x: 60,
   y:document.querySelector("#christmas").scrollHeight + 120,
   timerId: null
}
function myMove3 () {
   characterRandom = setInterval (myFrame3, 75)
}
function myFrame3 () {
    if (characterRandom.y > characterRandom.screenHeight - 0.5) {
        characterRandom.y =160;

    } else {
        randomNumber = Math.random()
        if (randomNumber < 0.5) {
            characterRandom.x -= 2;
}       else {
            characterRandom.x += 2; 
} 
        characterRandom.y += 5;
        characterRandom.elemmmm.style.top = characterRandom.y + "px";
        characterRandom.elemmmm.style.left = characterRandom.x + "px";
        characterRandom.elemmmm.src =
        "theme\\" + characterRandom.arrImgs3[characterRandom.poseNumber];
        console.log(characterRandom.elemmmm.src);
        characterRandom.poseNumber = (characterRandom.poseNumber + 1) % 4;

    }

}


"tdrachenn0000.png", "tdrachenn0001.png", "tdrachenn0002.png", "tdrachenn0003.png", "tdrachenn0004.png", "tdrachenn0005.png", 
"tdrachenn0006.png", "tdrachenn0007.png", "tdrachenn0008.png"