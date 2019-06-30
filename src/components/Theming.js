import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.red,
      text: colors.black,
      bodyBg: colors.gray,
      techBg: colors.darkgray,
      headerBg: colors.red,
      iconText: colors.gray,
      link: colors.red,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.red),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.red),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
