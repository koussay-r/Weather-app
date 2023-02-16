import axios from "axios";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
export default function App() {
  const [bgImage, setBgImage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleInptValue = (e) => {
    setInputValue(e.target.value);
  };
  const key = process.env.REACT_APP_UNSPLASH_API_KEY;
  const handleBgImage = async () => {
    const headers = {
      Authorization: `Client-ID ${key}`,
    };
    console.log(key);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${inputValue}`,
        { headers }
      );
      console.log(response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].urls.raw);
      setBgImage(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ].urls.raw
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full absolute h-full flex justify-center top-0 bottom-0">
      <img
        src={bgImage}
        alt=""
        className="absolute bottom-0 top-0 brightness-75   w-full"
      />
      <div className="block z-[10] bg-black bg-opacity-80 h-[500px] rounded-xl w-[350px] m-auto">
        <div className="flex pt-2 justify-center">
          <input
            type={"Text"}
            value={inputValue}
            onChange={handleInptValue}
            className="bg-gray-700 bg-opacity-40 h-8 text-white pl-2 rounded-lg w-[70%]"
          />
          <HiOutlineSearch className="text-white cursor-pointer mt-2 text-md ml-2" onClick={handleBgImage} />
        </div>
      </div>
    </div>
  );
}
