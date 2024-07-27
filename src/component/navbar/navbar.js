import React, { Component } from 'react';
import './navbar.css';

import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useAuth0 } from "@auth0/auth0-react";



export function Navbar()
{
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
    return(
        <div className='container-fluid'>
            <div className='row navbar_main'>
                <div className='col-3 navbar_leftbar'>
                    <img className='navbar_logo' src='https://th.bing.com/th?id=OIP.QHODby_bS81-x2of8vCIhgAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'/>
                    <div class="search-container">
  <input type="text" class="search-input" placeholder="Search..."/>
  <button type="submit" class="search-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
  </button>
</div>
   
                </div>
                <div className='col-6'>
                    <div className='icon-container'>
                   <span className='active'> <i class="bi bi-house-fill"></i></span>
                    <span><i class="bi bi-bank"></i></span>
                   <span> <i class="bi bi-caret-down-square"></i></span>
                    <span><i class="bi bi-people-fill"></i></span>
                    <span><i class="bi bi-flag"></i></span>
                    </div>
                    </div>
                    <div className='col-3'>
                        <div className='nav-righttab'>
                        <Avatar className='nav-rightimage' src="https://tse4.mm.bing.net/th/id/OIP.Nolz7WP6ihgX54G98AcWnAHaEo?rs=1&pid=ImgDetMain"  sx={{ width: 25, height: 25 }}/>
                        
                          <div className='nav-profilename'>suchi</div>
                          <span className='lst-icon'><AddCircleIcon/></span>
                          
                          {
                            isAuthenticated && (
                              <span>
                                <p>{user.name}</p>
                                </span>
                            )
                          }
                          {
                          isAuthenticated?
                     
                            (<span><button className='nav_btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Logout
                            </button>
                             </span>):
                             (<span><button className='nav_btn' onClick={() => loginWithRedirect()}>LogIn</button></span>)

                          
                                    }
                                    </div>

                          
                         

                          
                          
                            
                            
                            
                          
                    </div>
            </div>
        </div>
    )
}