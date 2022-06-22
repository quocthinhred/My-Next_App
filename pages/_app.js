import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppWrapper } from '../context/cartState'
import { CookiesProvider } from "react-cookie"

config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </CookiesProvider>
  )
}

export default MyApp
