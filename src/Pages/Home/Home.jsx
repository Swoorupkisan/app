import React from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
const Home = () => {

  const [category, setCategory] = useState("All");
  

  const [category, setCategory] = useState("All");
  
  return ( category={category} setCategory={setCategory}
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
