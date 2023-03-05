import '@/styles/globals.css'
import { Raleway } from '@next/font/google'
import localFont from '@next/font/local';

const cooper = localFont({
  src:[
    {
      path:'../public/cooperhewitt-bold-webfont.woff2',
      weight:'300',
      display: 'swap'
    }
  ]
})

const relaway = Raleway({subsets:['latin']})

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}
