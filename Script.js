import { getWeatherData } from "./Weather.js";
const btnSubmit=document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', function()
{
    const txtInput=document.getElementById('txtInput').value;
    getWeatherData(txtInput);
    
})

