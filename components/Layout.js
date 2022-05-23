import React from "react"
import Head from "next/head"
import NextLink from "next/link"
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material"
import useStyles from "../utils/styles"

export default function Layout({ title, children, description }) {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - NextJs_E-Commerce` : "NextJs_E-Commerce"}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <AppBar position='static' className={classes.navbar}>
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
    </div>
  )
}
