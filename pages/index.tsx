import {background, Box, Center, Spacer, Stack} from '@chakra-ui/react'
import { url } from 'inspector'
import type {NextPage} from "next"
import Head from 'next/head'
import styles from './styles/Home.module.css'
import NavBar from '../components/Navbar'
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className='{styles.container}'>
      <Head>
        <title>Buildooors</title>
        <meta name='The NFT Collection for Buildooors'></meta>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <Box 
        w="full"
        h='calc(100vh)'
        backgroundImage={"url(/assets/home-background.svg)"}
        backgroundPosition='center'
        >
          <Stack w='full' h='calc(100vh)' justify='center'>
            <NavBar/>
            <Spacer />
            <Center>
              {connected ? <Connected/> : <Disconnected/>}
            </Center>
            <Spacer/>

            <Center>
              <Box marginBottom={4} color='white'>
                <a href="https://twitter.com/seerNFT"
                target='_blank'
                rel='noopener noreferrer'>
                  built by seer
                </a>
              </Box>
            </Center>
          </Stack>
        </Box>
    </div>
  )
}

export default Home
