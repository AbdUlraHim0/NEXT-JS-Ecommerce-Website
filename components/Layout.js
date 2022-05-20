import React from "react"
import Head from "next/head"
import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import useStyles from "../utils/styles"

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>NextJs_E-Commerce</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>NextJs_E-Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>all rights reserved. Next.js_E-Commerce</Typography>
      </footer>
    </div>
  )
}
