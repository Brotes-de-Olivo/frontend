import {Link as RouterLink} from 'react-router-dom'

export interface LinkProps {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  disabled?: boolean
  sx?: React.CSSProperties
  external?: boolean
}

const defaultSx: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
}

export const Link = ({href, target, rel, children, disabled, sx, external}: LinkProps) => {
  const style = {...defaultSx, ...sx}

  if (disabled) {
    return <span style={style}>{children}</span>
  }

  if (external) {
    return (
      <a href={href} target={target} rel={rel} style={style}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink to={href} target={target} rel={rel} style={style}>
      {children}
    </RouterLink>
  )
}
