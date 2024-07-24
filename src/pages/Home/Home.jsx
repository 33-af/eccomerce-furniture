
import AboutUs from '../../components/AboutUs/AboutUs'
import ArtickleNews from '../../components/ArtickleNews/ArtickleNews'
import BannerTop from '../../components/Banner/Banner'
import Counter from '../../components/Counter/Counter'
import Gallary from '../../components/Gallary/Gallary'
import Join from '../../components/Join/Join'
import Logos from '../../components/Logos/Logos'
import ProjectPlan from '../../components/ProjectPlan/ProjectPlan'
// import Contact from '../Contact/Contact'
import './Home.css'


const Home = () => {
  return (
    <>
      <BannerTop/>
      <ProjectPlan/>
      {/* <Contact/> */}
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
