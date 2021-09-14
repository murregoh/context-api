import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavBar = () => {
    return (
        <>
            <Tabs>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/about'>About</NavLink>
            </Tabs>
        </>
    );
}

const Tabs = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover{
        color: #191668;
    }
    a.active {
        border-bottom: 2px solid #165168;
        padding-bottom: 3px
    }
`;

export default NavBar;