import "@assets/main.css"
import { AppProps } from "next/app"
import "keen-slider/keen-slider.min.css"
import { FC } from "react"
import 'styles/main.scss'
import { UIProvider } from "@components/ui/context"
//import { UIProvider } from "@components/ui/context"


const Noop: FC = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}){
    const Layout = Component.Layout ?? Noop
  
    return (
        <UIProvider>
        <Layout>
           <Component {...pageProps} />
        </Layout>
        </UIProvider>
    )
}

export default MyApp