import * as React from 'react'
import { cx } from 'emotion'

import style from './style'

import Branding from './Branding'
import Links from './Links'

function TopBar({ children, className = '' }) {
  return <header className={cx(style, className)}>{children}</header>
}

TopBar.Branding = Branding
TopBar.Links = Links

export default TopBar
