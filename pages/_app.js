import '../assets/scss/index.scss'
import Navbar from "../uiComponents/navbar/Navbar"
import Footer from "../uiComponents/footer/Footer"
function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
