import styled from 'styled-components';

// Components
import NavBar from '../navbar/NavBar';

const Header = () => {
    return (
        <HeaderContainer>
            <Titulo>My Personal Blog</Titulo>
            <NavBar />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

export default Header;