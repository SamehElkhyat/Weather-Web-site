'use client'
import React, { useCallback, useEffect , useState } from 'react'
import logo from '../img/banner.png'
import umbrela from '../img/icon-umberella.png'
import wind from '../img/icon-wind.png'
import air from '../img/icon-compass.png'
import './Content.css'
import Image from 'next/image'
import axios from 'axios'
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { motion } from 'framer-motion';

export default function Page() {

  const [City, setCity] = useState("cairo")

  const [product,setProduct]=useState([])

  const [Current,setCurrent]=useState([])

  const [country,setcountry]=useState([])

  const [Forrest,setForrest]=useState([])




  const getProduct= useCallback(async () => {

    const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
  
    setProduct([data.location]);
    
    },[City],)
  

    
  const getCountry= useCallback(async () => {

    const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    
    setcountry([data.location.name]);  
    },
    [City],)



    const getCurrent= useCallback(async () => {

      const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    
      setCurrent([data.current]);
      },
      [City],)



      
    const getForrest= useCallback(async () => {

      const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    
      setForrest(data.forecast.forecastday);  
      },
      [City],)
  

   
  



  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };
  
useEffect(()=>{
  
    getProduct();

    getCurrent();

    getCountry();
    
    getForrest();
  
  },[City])
  return (
    <>
    <div className="banner" key={12000}>
      <Image className="banner" src={logo} alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts" />
</div>
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible" className="cont container" key={11000} >
<div className="data row " key={10000}>
<div className="bar" key={1000}>

<Stack style={{color:"white",margin:"30px"}}  direction={"row"} justifyContent={"center"} sx={{ minWidth: 150 }}>
      <FormControl justifyContent={"center"}  style={{width:"100%"}} >
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={(e)=>setCity(e.target.value)}
        >
          <MenuItem  value={"Bani Suwayf"}>بني سويف</MenuItem>
          <MenuItem value={"Sohag"}>سوهاج</MenuItem>
          <MenuItem value={"Giza"}>الجيزه</MenuItem>
          <MenuItem value={"Qinā"}>قنا</MenuItem>
          <MenuItem value={"Minya"}>المنيا</MenuItem>
          <MenuItem value={"Sohag"}>سوهاج</MenuItem>
          <MenuItem value={"Qinā"}>قنا</MenuItem>
          <MenuItem value={"Aswan"}>اسوان</MenuItem>
          <MenuItem value={"Luxor"}>الأقصر</MenuItem>
          <MenuItem value={"Alexandria"}>الاسكندريه</MenuItem>
          <MenuItem value={"Gharbia"}>الغربيه</MenuItem>
          <MenuItem value={"Port Said"}>بور سعيد</MenuItem>
          <MenuItem value={"Suez"}>السويس</MenuItem>
          <MenuItem value={"Dakahlia"}>الدقهليه</MenuItem>
          <MenuItem value={"monufia"}>المنوفيه</MenuItem>
          <MenuItem value={"Asyut"}>اسيوط</MenuItem>
          <MenuItem value={"Faiyum"}>الفيوم</MenuItem>
          <MenuItem value={"Sharqia"}>الشرقيه</MenuItem>
          <MenuItem value={"Ismailia"}>الاسماعيلية</MenuItem>




          
          


          

        </Select>
      </FormControl>
    </Stack>
</div>


    <motion.div variants={item} className="outer content col-md-1 "key={660} >
    {Current.map((pro,i)=><div className='insOuter h-100' key={i[100]}>
      <h6 className='text-white text-center' key={i[150]}>{country}</h6>
      {pro.cloud==0?<h6 className='text-white text-center' key={i[170]}>clear</h6>:<h6 className='text-white text-center' key={i[900]}>rainly</h6>}
      <h1 className='text-white text-center' key={i[175]}>{pro.feelslike_c}</h1>
      <Image alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts"src={wind}></Image ><span className='text-white text-center'>20%</span>
      <Image alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts" src={air}></Image><span className='text-white text-center'>20%</span>
      <Image alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts" src={umbrela}></Image><span className='text-white text-center'>20%</span>

    </div>
   
    )}

</motion.div>

    <motion.div variants={item} className="middle content col-md-1">
    <div className="barr bg-danger"></div>

    {product.map((pro,i)=><div className="insOuter w-100 h-100" key={i[300]}>

      <h6 className='text-white' key={i[400]}>{pro.name},{pro.country}</h6>
      <h6 className='text-white' key={i[500]}>{String(pro.localtime).split(" ").slice(0,1).join('')}</h6>

    </div>

    )}
    
</motion.div>

    <motion.div variants={item} className="content col-md-1 w-25" key={12200}>

    {Forrest.map((pro,i)=><div className="insOuter w-100 h-100" key={i[300]}>

    {[pro.day].map((pro,i)=><div className="insOuter w-100 h-100" key={i[300]}>
      
      <h6 className='text-white' key={i[400]}>Max:{pro.maxtemp_c}</h6>
      <h6 className='text-white' key={i[500]}>Min:{String(pro.
      mintemp_c)}</h6>
        <Image alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts" src={wind}></Image ><span className='text-white text-center'>{pro.
maxwind_mph}</span>
      <Image alt="Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts" src={air}></Image><span className='text-white text-center'>{pro.
avgvis_km
}</span>
      <Image alt="
Weather Current weather updates
Local weather forecast
Real-time weather conditions
5-day weather outlook
Weather radar maps
Severe weather alerts
Hourly weather updates
Weather patterns and trends
Climate conditions
Seasonal weather changes
Storm tracking
Precipitation levels
Wind speed and direction
Temperature variations
UV index and sun exposure
Humidity levels
Air pressure changes
Weather-related travel tips
Extreme weather preparedness
Global weather forecasts"
src={umbrela}>
  </Image>
  <span className='text-white text-center'>{pro.
avghumidity
}</span>
      </div>
      
      )}

</div>

)}
</motion.div>

</div>

    </motion.div>
        
    </> 
  )
}