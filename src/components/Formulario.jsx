import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { Error } from './Error';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { coins } from '../data/coins';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top:30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

export const Formulario = ({setCoins}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [coin,SelectMonedas] = useSelectMonedas('Elige tu Moneda',coins);
    const [criptoCoin,SelectCriptoCoin] = useSelectMonedas('Elige tu Criptomoneda',criptos);

      useEffect(() => {
        const consultApi = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const response = await fetch(url);
            const result = await response.json();

            //Crea un nuevo arreglo, foreach solo lista
            const arrayCriptos = result.Data.map(cripto => {
                const object = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }

                return object
            });

            setCriptos(arrayCriptos);
        }
        consultApi();
      }, []);

      const handleSubmit = (e) =>{
            e.preventDefault();

            if([coin,criptoCoin].includes('')){
                setError(true);
                return
            }

            setError(false);
            setCoins({
                coin,
                criptoCoin
            });
      }
      

    

  return (

    <>

    {error && <Error>Todos los campos son obligatorios</Error>}

    <form
        onSubmit={handleSubmit}
    >
        <SelectMonedas/>
        <SelectCriptoCoin/>
        
        <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>    
    )
}
