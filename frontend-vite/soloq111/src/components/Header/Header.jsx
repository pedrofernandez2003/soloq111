import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <div className='header'>

            <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                <div class="container-fluid text-center">
                    <span class="navbar-brand">SoloQ 111</span>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink to='/' className='nav-link' > Inicio </NavLink> 
                            <NavLink to='/leaderboard' className='nav-link'> 
                                <img src="https://static.bigbrain.gg/assets/lol/s12_rank_icons/challenger.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                                Leaderboard High-elo 
                            </NavLink>
                            <NavLink to='/leaderboard' className='nav-link'> 
                                <img src="https://static.bigbrain.gg/assets/lol/s12_rank_icons/diamond.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                                Leaderboard Low-elo 
                            </NavLink>
                            <a class="nav-link disabled" aria-disabled="true">Quiero entrar!</a> 
                        </div>

                        <span class="navbar-text flex-row-reverse">
                            720:00:00
                        </span>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Header