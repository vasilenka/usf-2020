import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Twitter from './Twitter'
import Facebook from './Facebook'

const SEO = ({
  title,
  external,
  description,
  image,
  meta,
  keywords,
  pathname,
  article,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          lang,
          defaultImage,
          defaultImageWide,
          author,
          twitterUsername,
          facebook,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: external ? image : `${siteUrl}${image || defaultImage}`,
        imageWide: external ? image : `${siteUrl}${image || defaultImageWide}`,
        url: `${siteUrl}${pathname || '/'}`,
        siteUrl,
        author,
      }

      return (
        <>
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
            meta={[
              {
                name: `description`,
                content: seo.description,
              },
              {
                name: `image`,
                content: seo.image,
              },
              {
                property: `og:title`,
                content: seo.title,
              },
              {
                property: `og:url`,
                content: seo.url,
              },
              {
                property: `og:description`,
                content: seo.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: seo.image,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: twitterUsername,
              },
              {
                name: `twitter:site`,
                content: twitterUsername,
              },
              {
                name: `twitter:title`,
                content: seo.title,
              },
              {
                name: `twitter:description`,
                content: seo.description,
              },
              {
                name: `twitter:image`,
                content: seo.imageWide,
              },
            ].concat(meta)}
          />
          <Facebook
            desc={seo.description}
            image={seo.imageWide}
            title={seo.title}
            type={article ? 'article' : 'website'}
            url={seo.url}
            locale={lang}
            name={facebook}
          />
        </>
      )
    }}
  />
)

SEO.defaultProps = {
  title: ``,
  lang: `en`,
  author: ``,
  image: null,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        author
        defaultImage: image
        defaultImageWide: imageWide
        lang
        siteUrl
        twitterUsername
        facebook
      }
    }
  }
`

export default SEO
