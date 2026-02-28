"use client"
import { useState } from "react"
import MobailNav from "./MobailNav"
import Nav from "./Nav"


const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <MobailNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav