const body = document.querySelector ("body");


const IMG_NUMBER = 6; // 가지고 있는 이미지 숫자들

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
    //image.addEventListener("loadend", handleImgLoad); API 환경에서 필요함
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
