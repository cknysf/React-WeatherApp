import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import './App.css'
import City from './city'

function App() {
  const key = "1b872f2813a7c3d7296d3b6899856f07"
  const [search, setSerach] = useState()
  const [city , setCity] = useState();
 useEffect(()=>{
  async function getApi() {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
      console.log(response);
      setCity(response.data)
    }   
    catch(error){
      console.log(error);
    }
  }
  getApi();

 },[search])

  return (
    <>
     <div>
      <h1>Weather App</h1>
      <input className='search' onChange={(e)=>{
        setSerach(e.target.value);
        
      }} type="text" placeholder='Lütfen Şehir İsmi Girniz' />
      <City city={city} />
     </div>
    </>
  )
}

export default App
