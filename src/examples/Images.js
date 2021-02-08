import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image2.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image3.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

function Images() {
  const data = useStaticQuery(getImages)
  return (
    <section
      style={{
        textAlign: "center",
        textTransform: "capitalize",
        width: "80vw",
        margin: "0 auto 10rem auto",
      }}
    >
      <article
        style={{
          border: "3px solid red",
          padding: "1rem 0",
        }}
      >
        <h3>basic image</h3>
        <img src={img} alt="some stuff" style={{ width: "100%" }} />
      </article>
      <article
        style={{
          border: "3px solid red",
          padding: "1rem 0",
        }}
      >
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article
        style={{
          border: "3px solid red",
          padding: "1rem 0",
        }}
      >
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="more stuff" />
      </article>
    </section>
  )
}

export default Images
