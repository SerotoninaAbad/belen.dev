import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import Technologies from 'components/Technologies'
import { rhythm } from '../lib/typography'
import Portfolio from 'components/Portfolio'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 0 0;
        padding-bottom: 0;
        display: flex;
        background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          padding-bottom: 0;
          flex-wrap: wrap;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          Hola! Let's build great software together
        </h1>
        <img
          css={css`
            padding: 0;
            max-width: 275px;
            margin: 0;
          `}
          src="hola.png"
          alt="hola.png"
        />
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Layout site={site}>
        <Hero />
        <Container
          css={css`
            padding-bottom: 0;
          `}
        >
          <p>
            I'm Belén Abad, software engineer and entrepreneur from Cuenca -
            Ecuador. My passion is to build and deliver high quality software to
            clients and employers. When I'm not in front of the computer I play
            with my 4 dogs, sing, and lift weights at the gym. I'm currently
            open to new job opportunities.
          </p>
        </Container>
        <Technologies />
        <Container>
          <h3>Portfolio</h3>
          <Portfolio></Portfolio>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
