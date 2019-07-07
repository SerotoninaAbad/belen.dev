import React from 'react'
import { css } from '@emotion/core'
import Link from 'components/Link'
const Project = props => {
  return (
    <div
      css={css`
        padding: 15px;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.14);
        display: flex;
        flex-direction: column;
        font-size: 12px;
        margin: 5px;
        flex-grow: 1;
        flex-basis: 0;
        text-align: center;
      `}
    >
      <img
        css={css`
          min-width: 200px;
          height: auto;
          margin: auto auto;
          align-self: center;
        `}
        src={props.image}
        alt={props.name}
      />
      <h6
        css={css`
          padding: 0;
          margin: 0;
          margin-top: 10px;
          text-align: center;
        `}
      >
        {props.title}
      </h6>
      <div
        css={css`
          padding: 10px;
        `}
      >
        {props.description}
      </div>
      <Link
        css={css`
          text-align: center;
        `}
        to={props.link}
        aria-label={`View ${props.name}`}
        target="_blank"
      >
        {props.linkTitle}
      </Link>
    </div>
  )
}
export default Project
