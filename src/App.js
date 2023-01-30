import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
export default function App() {
  const [bgImage, setBgImage] = useState("");
  const [weatherdata,setWeatherData]=useState()
  const [inputValue, setInputValue] = useState("");
  const [cityName,setCityName]=useState("")
  const handleInptValue = (e) => {
    setInputValue(e.target.value);
  };
  
  const API_key=process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const handleBgImage = async () => {
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_key}`)
      setCityName(response.data.name)
      setWeatherData({cityname:response.data.name,temp:response.data.main.temp/10,humidity:response.data.main.humidity,wind:response.data.wind.speed})
      console.log(response.data);
    }catch(err){
      console.log(err)
    }
  };
  useEffect(()=>{
    const key = process.env.REACT_APP_UNSPLASH_API_KEY;
    const handleCityimage=async()=>{
      const headers = {
        Authorization: `Client-ID ${key}`,
      };
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${cityName}`,
          { headers }
        );
        setInputValue("")
        setBgImage(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ].urls.full
        );
      } catch (err) {
        console.log(err);
      }
    }
    if(cityName.length!==0){

      handleCityimage()
    }
  },[cityName])
  return (
    <div className="w-full absolute h-full flex justify-center top-0 bottom-0">
      <img
        src={bgImage}
        alt=""
        className="brightness-90  object-cover  w-full"
      />
      <div className="block z-[10] absolute top-[16%] transition-all duration-700 bg-black bg-opacity-80 h-fit rounded-xl w-[300px] md:w-[350px] m-auto">
        <div className="flex pt-2 pb-2 justify-center">
          <input
            type={"Text"}
            value={inputValue}
            onChange={handleInptValue}
            placeholder="Search..."
            className="bg-gray-700 outline-none bg-opacity-40 h-8 text-white pl-2 rounded-lg w-[70%]"
          />
          

          <HiOutlineSearch className="text-white cursor-pointer mt-2 text-md ml-2" onClick={handleBgImage} />
          
        </div>
        <div>
          {
            weatherdata &&
            <div>
            <p>{weatherdata.cityname}</p>
            <p>{weatherdata.temp}</p>
            <p>{weatherdata.humidity}</p>
            <p>{weatherdata.wind}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
