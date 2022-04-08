import React from 'react';
import styled from '@emotion/styled'

const Content = styled.div`
    display: flex;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    align-items:start;
    gap:1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width:120px;

`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }

`

const Price = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }

`

export const Result = ({result}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result;

  return (
    <Content>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cript"/>
        <div>
            <Price>El Precio es de: <span>{PRICE}</span></Price>
            <Text>El Precio más alto del día: <span>{HIGHDAY}</span></Text>
            <Text>El Precio más bajo del día: <span>{LOWDAY}</span></Text>
            <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Ultima actualización: <span>{LASTUPDATE}</span></Text>
        </div>
    </Content>
  )
}
