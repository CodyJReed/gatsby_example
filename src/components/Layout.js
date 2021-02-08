import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export { Layout as default }
