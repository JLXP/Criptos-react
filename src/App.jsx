import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import {Formulario} from './components/Formulario';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`
//Las imagenes siempre tinen un display-inline
const Imagen = styled.img`
  max-width: 400px;
  width: 80%; 
  margin: 100px auto 0 auto;
  display:block;
`;

const Heading = styled.h1`
  font-family: 'LATO', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto;
  }

`

function App() {
  
  const [coins, setCoins] = useState({});


  useEffect(() => {

    if( Object.keys(coins).length > 0 ){

    }

  }, [coins]);
  

  return (
    <Contenedor>
      <Imagen 
      src={ImagenCripto}
      alt="imagenes criptomonedas"
      ></Imagen>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setCoins={setCoins} />
        <Resultado/>
      </div>
    </Contenedor>
  )
}

export default App
