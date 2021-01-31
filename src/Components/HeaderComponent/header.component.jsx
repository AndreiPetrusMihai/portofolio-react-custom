

import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';


function Header(){
    return(
        <div className='header'>
            <nav>
                <Link to='/about' className='navOption'>
                    <button className="ripple">About Me</button>

                </Link>
                <Link to='/projects' className='navOption'>
                    <button className="ripple">My Projects</button>

                </Link>
            </nav>
        </div>
    )
}

export default Header;