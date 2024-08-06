import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import '../components/Sidebar.css';
import { FaBars } from 'react-icons/fa6';
import { RxDashboard } from 'react-icons/rx';
import { FiBarChart } from 'react-icons/fi';
import { GrTransaction } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { SettingContext } from '../Context/SettingsContext';

function Sidebar({ children }) {
    const{darkMode}=useContext(SettingContext)
    const routes = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <RxDashboard />
        },
        {
            path: '/transaction',
            name: 'Transaction',
            icon: <GrTransaction />
        },
        {
            path: '/settings',
            name: 'Settings',
            icon: <IoSettingsOutline />
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const toggle = () => {
        if (!isMobile) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
            if (window.innerWidth > 600) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen && !isMobile ? '250px' : '105px',
                        transition: {
                            duration: 0.5,
                            type: 'spring',
                            damping: 15
                        }
                    }}
                    className={`sidebar ${darkMode?'dark-mode':''}`}
                >
                    <div className="top_section">
                        <h1 className={isOpen ? 'logo' : 'small-logo'}></h1>
                        <motion.div
                            animate={{
                                width: '100px',
                                transition: {
                                    duration: 0.5,
                                    type: 'spring',
                                    damping: 10
                                }
                            }}
                        >
                            <div className="bars">
                                <FaBars onClick={toggle} />
                            </div>
                        </motion.div>
                    </div>
                    <main>
                        <section className={`routes ${darkMode?'dark-mode':''}`}>
                            {routes.map((route) => (
                                <NavLink to={route.path} key={route.name} className={`link ${darkMode?'dark-mode':''}`}>
                                    <div className="icon">{route.icon}</div>
                                    <div className={isOpen ? 'link_text' : 'just_text'}>{route.name}</div>
                                </NavLink>
                            ))}
                        </section>
                    </main>
                </motion.div>
                <div className="main2">{children}</div>
            </div>
        </>
    );
}

export default Sidebar;
