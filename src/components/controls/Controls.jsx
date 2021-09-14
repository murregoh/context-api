import { useContext } from "react";
import styled from "styled-components";
import { Context } from '../../contexts/context';

const Controls = () => {

    const { IncreaseFont, DecreaseFont, HandleAlignment } = useContext(Context);

    return (
        <ContenedorControles>
            <div>
                <Boton onClick={() => IncreaseFont()}>Increase</Boton>
                <Boton onClick={() => DecreaseFont()}>Decrease</Boton>
            </div>
            <div>
                <Boton onClick={() => HandleAlignment('Left')}>Left</Boton>
                <Boton onClick={() => HandleAlignment('Center')}>Center</Boton>
                <Boton onClick={() => HandleAlignment('Right')}>Right</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;

export default Controls;