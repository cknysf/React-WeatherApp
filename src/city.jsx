import React from 'react'
import './App.css'

function city({city}) {
    console.log(city);
    if(city != null){
    const iconcode = city.weather[0].icon
    const icon = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon);
  return (
    <div className='container'>
        <h1>Sıcaklık:{city.main.temp}</h1>
        <h1>Şehirin İsmi:{city.name}</h1>
        <h1>Hava Durmu:{city.weather[0].description}</h1>
        <h1>ülke:{city.sys.country}</h1>
        <img src={icon}  width={80}/>
        
    </div>
  )
}
else{
    return (
        <div>
            <h1>City not found</h1>
        </div>
    )
}
}

export default city