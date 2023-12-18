
import './App.css'
import { Hero } from './layout/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import { Overview } from './layout/Overview';
import { Modular } from './layout/Modular';
import { Community } from './layout/Community';
import { Discord } from './layout/Discord';
import 'react-multi-carousel/lib/styles.css';
import { Foot } from './layout/Foot';
import { Suscription } from './layout/Suscription';




function App() {


  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Community />
      <Modular />
      <Discord />
      <Suscription />
      <Foot />
    </>
  )
}

export default App
