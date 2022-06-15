import type { NextPage } from 'next'
import AllPlaylists from '../components/AllPlaylists'
import Container from '../components/Container'
import NowPlaying from '../components/NowPlaying'
import TopTracks from '../components/TopTracks'

const Home: NextPage = () => (
  <Container title='Eloi&apos;s portolio'>
    <h1 className="font-bold text-7xl text-left sm:text-center sm:text-9xl mb-7">
      Welcome to my personnal portfolio!
    </h1>

    <h3 className='text-3xl text-left sm:text-center sm:text-5xl mt-5'>
      Here are some tunes I&apos;m jamming to ...
      <p className='text-xl text-left sm:text-center sm:text-3xl mt-5'>
        Let&apos;s get into my top 15 (because why not ?)
      </p>
    </h3>
    <TopTracks />
    <AllPlaylists />
    <p className='text-lg text-center mb-5'>
      Are you curious ? Check what I&apos;m currently listening to
    </p>
    <NowPlaying />
  </Container>
)

export default Home
