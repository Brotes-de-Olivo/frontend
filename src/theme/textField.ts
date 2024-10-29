import {ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme} from '@mui/material'
import {COLORS} from './colors'
import {RADIUS} from './radius'

interface MuiTextFieldType {
  defaultProps?: ComponentsProps['MuiTextField']
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField']
  variants?: ComponentsVariants['MuiTextField']
}

export const MuiTextField: MuiTextFieldType = {
  defaultProps: {
    sx: {
      borderRadius: RADIUS.lg,
      color: COLORS.PRIMARY.D2,
    },
  },
  styleOverrides: {
    root: {
      borderRadius: RADIUS.lg,
      color: COLORS.PRIMARY.D2,
    },
  },
}
