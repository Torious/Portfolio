import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import { useState, useEffect } from "react"
import { GlobalStyles } from "../ThemeConfig"
import { lightTheme, darkTheme } from "../Constants/theme"
import Layout from '../Layout';
import { ChakraProvider } from "@chakra-ui/react"
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("dark")
  const currentTheme = darkTheme

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme == darkTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} currentTheme={currentTheme} style={{ backgroundColor: currentTheme.secondary }}>
          <Component {...pageProps} currentTheme={currentTheme} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
