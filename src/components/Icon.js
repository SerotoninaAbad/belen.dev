import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'

const Icon = props => {
  const theme = useTheme()
  return (
    <div>
      <div
        css={css`
          border-radius: 50%;
          width: 90px;
          height: 90px;
          background-color: ${props.bgColor};
          display: flex;
        `}
      >
        <img
          css={css`
            max-width: 52px;
            height: auto;
            margin: auto auto;
            align-self: center;
          `}
          src={props.image}
          alt={props.name}
        />
      </div>
      <div
        css={css`
          text-align: center;
          font-size: 14px;
          margin-top: 10px;
          color: ${theme.colors.iconText};
        `}
      >
        {props.name}
      </div>
    </div>
  )
}

export default Icon
