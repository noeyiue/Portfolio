import React from 'react'
import "./home.css"
import Social from './home_component/Social'
import Data from './home_component/Data'
import ScrollDown from './home_component/ScrollDown'

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />

                <div className="home_img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home