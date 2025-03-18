import React from 'react'
import './home.css'
import { useState } from 'react';
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
const Home = () => {

  const [category, setCategory] = useState("All");

  return ( 
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
