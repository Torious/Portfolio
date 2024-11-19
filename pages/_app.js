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

  useEffect(() => {
    const logSizeInfo = () => {
      console.log('Window inner size:', window.innerWidth, 'x', window.innerHeight);
      console.log('Device pixel ratio:', window.devicePixelRatio);
    };
  
    logSizeInfo();
    window.addEventListener('resize', logSizeInfo);
  
    return () => window.removeEventListener('resize', logSizeInfo);
  }, []);

  useEffect(() => {
    // Move localStorage logic to useEffect to avoid SSR issues
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('dark') // Set default theme to dark
      localStorage.setItem('theme', 'dark')
    }

    AOS.init({
      duration: 500
    });
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ChakraProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} currentTheme={currentTheme} style={{ backgroundColor: currentTheme.secondary }}>
          <Component {...pageProps} currentTheme={currentTheme} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp