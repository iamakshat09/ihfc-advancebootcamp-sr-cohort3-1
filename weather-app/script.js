const btn=document.querySelector(".btn");
const weather=document.querySelector(".weather .value");
const city=document.querySelector(".city .value");
const temp=document.querySelector(".temperature .value");

btn.addEventListener("click",function(){
    let cityname=document.querySelector(".cityInput").value;
    console.log(cityname);
    getdata(cityname);
})

async function getdata(cityname){
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=7cfa0eb2e8b15f042e1c909207c6f304";
    const res=await fetch(url);
    const data=await res.json();

    console.log(data);
    weather.textContent=data.weather[0].main;
    city.textContent=data.name;
    temp.textContent=data.main.temp;
}