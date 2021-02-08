import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import styles from "../components/products.module.css"

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product, index) => (
          <article key={index}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title}
              <span>{product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default products
