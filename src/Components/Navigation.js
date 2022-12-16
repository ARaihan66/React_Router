import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
`

const Navigation = () => {
    return (
        <div>
            <Nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/blogs2'>Blogs2</NavLink>
            </Nav>
        </div>
    )
}

export default Navigation
