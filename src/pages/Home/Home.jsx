import React, { useState } from "react";
import './Home.css'
import ExploreMenu from "../../components/ExplorerMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import AppDownload from "../../components/Appdownload/AppDownload";

const Home=()=>{

    const [category, setCategory]=useState('All')
    return(
        <div>
            <div  className="shashi">
            <Header />
           <ExploreMenu  category={category} setCategory={setCategory} />
           <FoodDisplay  category={category} />
           <AppDownload />
           </div>
         </div>
    )
}
export default Home 