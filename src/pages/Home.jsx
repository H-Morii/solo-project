import React from 'react'
import Main from '../components/Main'
import Row from "../components/Row"
import Requests from "../Requests"
const Home = () => {


  return (
    <div>
      <Main/>
      <Row title="UpComing" fetchUrl={Requests.requestUpcoming} />
      <Row title="Popular" fetchUrl={Requests.requestPopular} />
      <Row title="Trending" fetchUrl={Requests.requestTrending} />
    </div>
  )
}

export default Home
