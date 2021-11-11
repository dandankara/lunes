import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import LogoBTC from '../public/btc.svg'
import LogoLTC from '../public/ltc.svg'

import { Container, Footer } from '../styles/IndexStyle'

export default function Home() {

  return (
    <>
      <Container>
        <Link href='./Bitcoin' passHref>
          <Image
            src={LogoBTC}
            alt='Logo-BTC'
            width={200}
          />
        </Link>

        <Link href='./Litcoin' passHref>
          <Image
            src={LogoLTC}
            alt='Logo-LTC'
            width={200}
          />
        </Link>
      </Container>
      <Footer>
        <span>Para mais informações clique nas imagens</span>
      </Footer>
    </>
  )
}
