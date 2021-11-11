import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, CotacaoDiv, InputDiv } from '../styles/CoinStyle'

import LogoLTC from '../public/ltc.svg'
import api from './api/api'

export default function Litcoin() {

  const [price, setPrice] = useState([])
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    async function PriceLtc() {
      const resPrice = await api.get('get_price/LTC/USD')
      console.log(Object.keys(resPrice.data.data))

      // preciso de um let para guardar o preço
      let priceInit = 0;
      priceInit.toFixed(2)


      resPrice.data.data.prices.forEach((item) => {
        if (item.exchange == 'bitfinex'){
          priceInit = item;
        }
      });

      setPrice(priceInit.price)
    }

    async function GetTxdLtc() {
      const resTxd = await api.get('get_tx_received/LTC/Lcyv6gzJ124TEbinWrp8AfQ5A4yv3u5tiL')
        .then((res) => {
          console.log(res.data)
          setTransaction(res.data)
        })
        .catch((error) => {
          console.log(`Deu erro ${error}`)
        })
    }

    PriceLtc();
    GetTxdLtc();
  }, []);

  return (
    <Container>

      <Image
        src={LogoLTC}
        alt="Logo-BTC"
        width={200}
        height={200}
      />

      <CotacaoDiv>
        <label>
          <span>Site Oficial: <strong> <a href="https://litecoin.org/pt/" target="_blank/">LITECOIN </a> </strong> </span>
          <span>Exchange: bitfinex</span>
          <span>Cotação: {price} USD  </span>
        </label>

      </CotacaoDiv>
      <InputDiv>
        <input type="text" name='' placeholder="Insira um endereço" />
        <button>Pesquisar</button>
      </InputDiv>

    </Container>
  )
}
