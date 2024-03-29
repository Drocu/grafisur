import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';
import { BsHouseDoor } from "react-icons/bs";

import './AdminSidebar.scss';

export const AdminSidebar = () => {

    const navigate = useNavigate();
    const [collapseOpen, setCollapseOpen] = useState({
        dashboard: false,
        product: true,
        favorites: false,
    });

    const handleCollapse = (key) => {
        setCollapseOpen({
            ...collapseOpen,
            [key]: !collapseOpen[key],
        });
    };

    const isPathActive = (path) => {
        return window.location.pathname === path;
    };

    return (
        <div className='Sidebar'>
            <div className='Sidebar-title' >GrafiSur</div>
            <ul className='Sidebar-content'>
                <li className='Sidebar-nav-menu'>
                    <div className='Sidebar-nav-link'>
                        <IoGridOutline />
                        <span>Dashboard</span>
                    </div>
                    <Collapse in={false}>
                        <div>
                            <ul className='Sidebar-nav-items'>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </li>
                <li className='Sidebar-nav-menu'>
                    <div className={isPathActive('/admin-panel/products') || isPathActive('/admin-panel/categories') ? 'Sidebar-nav-link active' : 'Sidebar-nav-link'} onClick={() => handleCollapse('product')}>
                        <IoListOutline />
                        <span>Products</span>
                    </div>
                    <Collapse in={collapseOpen.product}>
                        <div>
                            <ul className='Sidebar-nav-items'>
                                <li className={isPathActive('/admin-panel/products') ? 's-nav-item active' : 's-nav-item'} onClick={() => navigate('/admin-panel/products')}>
                                    Details
                                </li>
                                <li className={isPathActive('/admin-panel/categories') ? 's-nav-item active' : 's-nav-item'} onClick={() => navigate('/admin-panel/categories')}>
                                    Categories
                                </li>
                                
                            </ul>
                        </div>
                    </Collapse>
                </li>
                <li className='Sidebar-nav-menu'>

                </li>
                <li className='Sidebar-nav-menu' onClick={() => navigate('/pe')}>
                <div className='Sidebar-nav-link'>
                        <BsHouseDoor alt="http://127.0.0.1:5173/pe"/>
                        Home
                    </div>
                </li>   
            </ul>
        </div >
    )
}