import React from 'react'
import { css } from '@emotion/core'
import Project from 'components/Project'
import projects from '../lib/projects'
const Portfolio = props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      `}
    >
      {projects.map(project => (
        <Project {...project} />
      ))}
    </div>
  )
}
export default Portfolio
