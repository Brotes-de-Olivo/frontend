import {ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme} from '@mui/material'
import {COLORS} from './colors'
import {RADIUS} from './radius'

interface MuiButtonType {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton']
  variants?: ComponentsVariants['MuiButton']
}

interface MuiIconButtonType {
  defaultProps?: ComponentsProps['MuiIconButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton']
  variants?: ComponentsVariants['MuiIconButton']
}

export const MuiButton: MuiButtonType = {
  defaultProps: {
    variant: 'contained',
    disableElevation: true,
    disableRipple: true,
    sx: {
      borderRadius: RADIUS.lg,
      textTransform: 'none',
    },
  },
  styleOverrides: {
    contained: {
      color: COLORS.BASE.WHITE,
      '&:disabled': {
        color: COLORS.BASE.WHITE,
        backgroundColor: COLORS.BASE.DARK_GRAY,
      },
    },
    containedPrimary: {
      backgroundColor: COLORS.PRIMARY.PRIMARY,
      '&:hover': {
        backgroundColor: COLORS.SECONDARY.PRIMARY,
        boxShadow: '0px 0px 20px 5px rgba(237, 171, 183, 0.45)',
      },
      '&:active': {
        backgroundColor: COLORS.PRIMARY.D1,
      },
    },
    containedSecondary: {
      backgroundColor: COLORS.SECONDARY.D1,
      '&:hover': {
        backgroundColor: COLORS.SECONDARY.D2,
        boxShadow: '0px 0px 20px 5px rgba(237, 171, 183, 0.45)',
      },
      '&:active': {
        backgroundColor: COLORS.PRIMARY.PRIMARY,
      },
    },
    text: {
      color: COLORS.PRIMARY.L1,
      '&:hover': {
        backgroundColor: 'transparent',
        color: COLORS.PRIMARY.PRIMARY,
      },
      '&:disabled': {
        color: COLORS.BASE.DARK_GRAY,
      },
    },
    outlined: {
      '&:disabled': {
        border: `2px solid  ${COLORS.BASE.DARK_GRAY}`,
        color: COLORS.BASE.WHITE,
        backgroundColor: COLORS.BASE.DARK_GRAY,
      },
    },
    outlinedPrimary: {
      color: COLORS.PRIMARY.PRIMARY,
      border: `2px solid ${COLORS.PRIMARY.PRIMARY}`,
      '&:hover': {
        backgroundColor: COLORS.PRIMARY.PRIMARY,
        color: COLORS.BASE.WHITE,
        border: `2px solid ${COLORS.PRIMARY.PRIMARY}`,
      },
      '&:active': {
        backgroundColor: COLORS.PRIMARY.D1,
      },
    },
    outlinedSecondary: {
      color: COLORS.SECONDARY.PRIMARY,
      border: `2px solid ${COLORS.SECONDARY.PRIMARY}`,
      '&:hover': {
        backgroundColor: COLORS.SECONDARY.PRIMARY,
        color: COLORS.BASE.WHITE,
        border: `2px solid ${COLORS.SECONDARY.PRIMARY}`,
      },
      '&:active': {
        backgroundColor: COLORS.SECONDARY.D1,
      },
    },
  },
}

export const MuiIconButton: MuiIconButtonType = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      color: COLORS.PRIMARY.PRIMARY,
      '&:hover': {
        color: COLORS.SECONDARY.D1,
      },
      '&:active': {
        color: COLORS.SECONDARY.D2,
      },
      '&:disabled': {
        color: COLORS.BASE.MID_GRAY,
      },
    },
  },
}
