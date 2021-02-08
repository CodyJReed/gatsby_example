import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

function examples({ data }) {
  const {
    site: {
      info: { title },
    },
  } = data
  return (
    <Layout>
      <h5>Title: {title}</h5>
    </Layout>
  )
}

export default examples
