'use client'
import React, { useEffect , useState } from 'react'
import logo from '../img/banner.png'
import './Content.css'
import Image from 'next/image'
import axios from 'axios'
import { Autocomplete, TextField } from '@mui/material'
import { motion } from 'framer-motion'

export default function Page() {

const [top100Films, settop100Films] = useState(["Giza","Cairo"])

  const [product,setProduct]=useState([])

  const [Current,setCurrent]=useState([])

  const [country,setcountry]=useState([])

  const [Forrest,setForrest]=useState([])

  const getProduct=async () => {
    
  const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`)
  
  setProduct([data.location]);  
  
  }
  const getCountry=async () => {
    
    const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`)
    
    setcountry([data.location.name]);  
    
    }

  const getCurrent=async () => {
    
  const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`)
    
  setCurrent([data.current]);

  }

    const getForrest=async () => {
    
    const {data}=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo`)
    
    setForrest([data.forecast]);  
      
  }  
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
  
  },[])
  return (
    <>
    <div className="banner" key={12000}>
      <Image className="banner" src={logo} alt="" />
</div>
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible" className="cont container" key={11000} >
<div className="data row " key={10000}>
<div className="bar" key={1000}>
<Autocomplete
key={90909}
  options={top100Films}
  renderInput={(params) => <TextField {...params} label="Country" />}
/></div>
{console.log(Forrest)
}
    <motion.div variants={item} className="outer content col-md-1 "key={660} >
    {Current.map((pro,i)=><div className='insOuter h-100' key={i[100]}>
      <h6 className='text-white text-center' key={i[150]}>{country}</h6>
      {pro.cloud==0?<h6 className='text-white text-center' key={i[170]}>clear</h6>:<h6 className='text-white text-center' key={i[900]}>rainly</h6>}
      <h1 className='text-white text-center' key={i[175]}>{pro.feelslike_c}</h1>

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
    {product.map((pro,i)=><div className="insOuter w-100 h-100" key={i[300]}>

<h6 className='text-white' key={i[400]}>{pro.name},{pro.country}</h6>
<h6 className='text-white' key={i[500]}>{String(pro.localtime).split(" ").slice(0,1).join('')}</h6>
</div>

)}
</motion.div>

</div>

    </motion.div>
        
    </> 
  )
}