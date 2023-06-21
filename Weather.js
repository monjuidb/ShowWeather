 const getWeatherData=function getData(cityName){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=8edc465caaeb6b3921e4593307e7453f')
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)
        const cityName=data.name
        const tem=data.main.temp-273.15
        const windspd=data.wind.speed
        const hmdt=data.main.humidity
        const description=data.weather[0].description
        document.getElementById('city').innerText=cityName
        document.getElementById('temp').innerText=tem.toFixed(2)
        document.getElementById('windspd').innerText=windspd
        document.getElementById('humidity').innerText=hmdt
        document.getElementById('dscrptn').innerText=description
    }
        ).catch(res=>alert('something went wrong!!Please try again.'))
}

export {getWeatherData}