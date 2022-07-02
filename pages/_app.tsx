import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { faInfo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SessionProvider } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/Global/header'
import Sidenav from '../components/Global/sidenav'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <div className="grid grid-rows-3 grid-cols-6 h-full">
        <Sidenav/>
        <main className="col-span-5 row-span-3 overflow-auto">
          <Header/>
          <section className="px-6 grid gap-6 mb-8 text-white">
            <Component {...pageProps} />
          </section>
        </main>
      </div> 
    </SessionProvider>
  )
}

export default MyApp
