import React, { useState } from 'react'
import {motion} from "framer-motion";
import '../components/Sidebar.css';
import {FaHome}from 'react-icons/fa'
import {MdSportsCricket,MdLogoDev} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {FaNoteSticky,FaBars} from 'react-icons/fa6';
import { RxDashboard } from "react-icons/rx";
import {TiTick} from 'react-icons/ti'
import { FiBarChart } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
function Sidebar({children}) {
    const routes=
    [
        {
            path:"/",
            name:"Dashboard",
            icon:<RxDashboard />
        },
        {
            path:"/cricket",
            name:"Transaction",
            icon:<GrTransaction />
        },
        {
            path:"/notes",
            name:"Summary",
            icon:<FiBarChart />

        },
        {
            path:'/todo',
            name:"Settings",
            icon:<IoSettingsOutline />
        }

    ]
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
    
    <div className='main-container'>
        
        <motion.div animate={{width:isOpen ?"250px":"105px",transition: {
              duration: 0.5,
              type: "spring",
              damping: 15,
            },}} className='sidebar'>
            <div className='top_section'>
                <h1 className={isOpen?"logo":"small-logo"}>
                    
                </h1>
                <motion.div animate={{width:"100px"
                ,transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
            }}

            >
                <div className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
                </motion.div>


            </div>
            <main>
                <section className='routes'>
                    {routes.map((route)=>(
                        <NavLink to={route.path} key={route.name} className='link' >
                            <div className='icon'>
                                {route.icon}

                            </div>
                            <div className={isOpen?"link_text":"just_text"}>
                                {route.name}
                            </div>
                        </NavLink>


                    ))}

                </section>
                
            </main>
            

        </motion.div>
        <div className='main2'>{children}</div>

        
    </div>
    
    </>
  )
}

export default Sidebar