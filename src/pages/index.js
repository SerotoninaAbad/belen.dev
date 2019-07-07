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
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
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
            Ecuador. My passion is to build and deliver quality software to
            clients and employeers. When I'm not in front of the computer or in
            a business meeting I play with my 4 dogs, sing, and lift weights at
            the gym. I'm currently open to new job opportunities
          </p>
        </Container>
        <Technologies />
        <Container>
          <h3>Portfolio</h3>
          <Portfolio></Portfolio>
        </Container>
        <Container
          css={css`
            padding-bottom: 0;
          `}
        >
          {allMdx.edges.map(({ node: post }) => (
            <div
              key={post.id}
              css={css`
                margin-bottom: 40px;
              `}
            >
              <h2
                css={css({
                  marginBottom: rhythm(0.3),
                  transition: 'all 150ms ease',
                  ':hover': {
                    color: theme.colors.primary,
                  },
                })}
              >
                <Link
                  to={post.frontmatter.slug}
                  aria-label={`View ${post.frontmatter.title}`}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <Description>
                {post.excerpt}{' '}
                <Link
                  to={post.frontmatter.slug}
                  aria-label={`View ${post.frontmatter.title}`}
                >
                  Read Article →
                </Link>
              </Description>
            </div>
          ))}
          <Link to="/blog" aria-label="Visit blog page">
            View all articles
          </Link>
          <hr />
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
