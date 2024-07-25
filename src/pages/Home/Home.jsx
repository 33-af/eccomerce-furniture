import AboutUs from '../../components/HomeComponents/AboutUs/AboutUs'
import ArtickleNews from '../../components/HomeComponents/ArtickleNews/ArtickleNews'
import BannerTop from '../../components/HomeComponents/Banner/Banner'
import Contact from '../../components/HomeComponents/Contact/Contact'
import Counter from '../../components/HomeComponents/Counter/Counter'
import Gallary from '../../components/HomeComponents/Gallary/Gallary'
import Join from '../../components/HomeComponents/Join/Join'
import Logos from '../../components/HomeComponents/Logos/Logos'
import ProjectPlan from '../../components/HomeComponents/ProjectPlan/ProjectPlan'

import './Home.css'


const Home = () => {
  return (
    <>
      <BannerTop/>
      <ProjectPlan/>
      <Contact/>
      <AboutUs/>
      <Logos/>
      <Gallary/>
      <Counter/>
      <ArtickleNews/>
      <Join/>
    </>
  )
}

export default Home
