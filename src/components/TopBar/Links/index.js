import * as React from 'react'
import { Link } from 'gatsby'
import { cx } from 'emotion'

import style from './style'

function MenuItem({ label, to, icon: Icon, external, linkProps }) {
  return (
    <li key={label}>
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer" {...linkProps}>
          {Icon && <Icon />}
          <span>{label}</span>
        </a>
      ) : (
        <Link to={to} activeClassName="active" {...linkProps}>
          {Icon && <Icon />}
          <span>{label}</span>
        </Link>
      )}
    </li>
  )
}

export default function Menu({ items, className = '' }) {
  return (
    <nav className={cx(style, className)}>
      <ul>
        {items.map(MenuItem)}
      </ul>
    </nav>
  )
}
