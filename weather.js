const API_KEY = "57ea3ec4c3b41bf06916cdb67971595c";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

//JS는 웹사이트로 request를 보내고 응답을 통해 데이터를 얻는 것이 가능함. 그 정보를 refresh 없이도 확인 가능
function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const placeName = json.name;
        weather.innerText = `You are in ${placeName} and it's ${temperature} °C`
    });
    //''가 아니라 ``사용해야 함. 
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    //console.log(position); //콘솔로그 창에 포지션이 나오게
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //latitude : latitude;
        longitude // longitude : longitude; js에서는 변수의 이름과 key 이름이 같다면 왼쪽처럼 선언해도 괜찮음.
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cannot access to geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)//API
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();