import './Logos.css'
import { ClientLogo_1, ClientLogo_2, ClientLogo_3, ClientLogo_4, ClientLogo_5 } from '../../../assets/index'

const Logos = () => {
  return (
    <>
      <section className="clientLogos">
        <div className="container flex">
          <img src={ClientLogo_1} alt="Client Logo 1" className="clientLogo" />
          <img src={ClientLogo_2} alt="Client Logo 2" className="clientLogo" />
          <img src={ClientLogo_3} alt="Client Logo 3" className="clientLogo" />
          <img src={ClientLogo_4} alt="Client Logo 4" className="clientLogo" />
          <img src={ClientLogo_5} alt="Client Logo 5" className="clientLogo" />
        </div>
      </section>
    </>
  )
}

export default Logos
