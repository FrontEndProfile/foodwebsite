import React from 'react'
import Hero from '../components/Hero/Hero'
import FavoriteCards from '../components/FavoriteCards/FavoriteCards'
import TabMenu from '../components/TabMenu/TabMenu'

const Home = () => {
  return (
    <>
      <Hero />
      <FavoriteCards />
      <TabMenu/>
    </>
  )
}

export default Home