import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import Icon from 'components/Icon'
import Container from 'components/Container'
import technologies from 'lib/technologies'

const Technologies = props => {
  const theme = useTheme()
  return (
    <div
      css={css`
        background-color: ${theme.colors.techBg};
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        {technologies.map(item => (
          <Icon {...item} />
        ))}
      </Container>
    </div>
  )
}

export default Technologies
