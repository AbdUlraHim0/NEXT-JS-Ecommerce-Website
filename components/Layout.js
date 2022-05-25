import React from "react"
import Head from "next/head"
import NextLink from "next/link"
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material"
import useStyles from "../utils/styles"
import { ThemeProvider } from "@mui/material"
import { useContext } from "react"
import { Store } from "../context/Store"
import Cookies from "js-cookie"

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode } = state

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  })

  const classes = useStyles()

  const darkModeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" })
    const newDarkMode = !darkMode
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF")
  }

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - NextJs_E-Commerce` : "NextJs_E-Commerce"}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar} color='secondary'>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Typography className={classes.brand}>
                  NextJs_E-Commerce
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
              <NextLink href='/cart' passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href='/login' passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>all rights reserved. Next.js_E-Commerce</Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
