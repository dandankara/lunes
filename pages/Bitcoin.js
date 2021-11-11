import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, CotacaoDiv, InputDiv } from '../styles/CoinStyle'

import api from './api/api'

import LogoBtc from '../public/btc.svg'

export default function Bitcoin() {

  const [price, setPrice] = useState(0)
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    async function PriceBtc() {
      const resPrice = await api.get('get_price/BTC/USD');

      console.log(Object.keys(resPrice.data.data))

      let priceInit = 0;
      priceInit.toFixed(2);

      resPrice.data.data.prices.forEach((item) => {
        //condição para buscar estritamente o exchange bitfinex da api
        if (item.exchange === 'bitfinex') {
          priceInit = item;
        }
      });
      
      setPrice(priceInit.price)
    }

    // async function GetTxdBtc() {
    //   let addressTxd = 0
    //   const resTxd = await api.get('get_tx_received/BTC/17JzE6xsyu4kZbLosvAKUXHdbU9arAp8Uf');

    //   console.log(resTxd.data);

    //   setTransaction(resTxd.data)
    // }

    PriceBtc();
    // GetTxdBtc();
  }, []);

  function SearchAddress(){
    alert('Funcionalidade ainda não disponível')
  }

  return (
    <Container>

      <Image
        src={LogoBtc}
        alt="Logo-BTC"
        width={200}
        height={200}
      />

      <CotacaoDiv>
        <label>
          <span>Site Oficial: <strong> <a href="https://bitcoin.org/pt_BR/" target="_blank/"> BITCOIN</a> </strong> </span>
          <span>Exchange: bitfinex</span>
          <span>Cotação: {price} USD </span>

        </label>

      </CotacaoDiv>
      <InputDiv>
        <input type="text" name='' placeholder="Insira um endereço" />
        <button onClick={SearchAddress}>Pesquisar</button>
      </InputDiv>
    </Container>
  )
}
