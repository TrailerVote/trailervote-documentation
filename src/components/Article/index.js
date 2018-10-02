import * as React from 'react'
import { cx } from 'emotion'

import { Link } from 'gatsby'

import Heading from './Heading'
import Body from './Body'
import Related from './Related'

import style from './style'

function Article(props) {
  const { children, className = '' } = props

  return (
    <article className={cx(style, className)}>{children}</article>
  )
}

function Navigation({ next, prev }) {
  return (
    <aside style={{ position: 'relative', height: 20 }}>
      {prev && <Link to={prev} style={{ position: 'absolute', left: 0 }}>Previous</Link>}
      {next && <Link to={next} style={{ position: 'absolute', right: 0 }}>Next</Link>}
    </aside>
  )
}

Article.Heading = Heading
Article.Body = Body
Article.Related = Related
Article.Navigation = Navigation

export default Article
