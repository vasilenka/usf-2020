import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, external, to, ...restProps }) =>
  external ? (
    <a href={to} {...restProps}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...restProps}>
      {children}
    </GatsbyLink>
  )

export default Link
