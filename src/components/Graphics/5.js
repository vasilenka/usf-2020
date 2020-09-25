import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Lima = ({ url, ...restProps }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "graphics/5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          {...restProps}
        />
      )}
    />
  )
}
export default Lima
