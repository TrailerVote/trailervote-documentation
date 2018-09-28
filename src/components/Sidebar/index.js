import * as React from 'react'
import GithubSlugger from 'github-slugger'
import { cx } from 'emotion'
import { Link } from 'gatsby'

import style from './style'
import organizePagesInCategories from '../../utils/organizePagesIntoCategories'

var slugs = new GithubSlugger();


export default function Sidebar({
    className = '',
    title,
    pages,
    categories,
    pathname,
  }) {

  const organizedPageCategories = organizePagesInCategories({ pages, categories })

  return (
    <aside className={cx(style, className)}>
      <h2>{title}</h2>
      {organizedPageCategories.map(({ category, pages }) => (
        <CategoryList key={category.name} { ...category } pages={pages} pathname={pathname} />
      ))}
    </aside>
  )
}

function CategoryList({ icon, label, pages, pathname }) {
  const Icon = icon
  return (
    <React.Fragment key={label}>
      <h3 key="label">
        <Icon />
        {label}
      </h3>
      <ul key="pages">
        {pages.map(page => (<Item key={page.fields.slug} page={page} pathname={pathname} />))}
      </ul>
    </React.Fragment>
  )
}

function Item({ pathname, page: { frontmatter: { title, shortTitle }, fields: { slug }, headings } }) {
  return (
    <li key={slug} className={pathname === slug ? 'active' : ''}>
      <Link key={slug} to={slug}>
        {shortTitle ? shortTitle : title}
      </Link>
      {headings.length > 0 && (
        <ul>
          {headings.map(heading => {
            const { value, depth } = heading;
            slugs.reset()

            return (
              depth === 2 && (
                <li key={value}>
                  <a href={`#${slugs.slug(value)}`}>{value}</a>
                </li>
              )
            )
          })}
        </ul>
      )}
    </li>
  )
}
