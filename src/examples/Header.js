import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query firstQuery {
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

function Header() {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>{title}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Header
