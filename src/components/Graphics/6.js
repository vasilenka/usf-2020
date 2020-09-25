import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Enam = ({ url, ...restProps }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "graphics/6.jpg" }) {
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
export default Enam
