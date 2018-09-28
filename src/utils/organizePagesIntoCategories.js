const NO_MATCHING_CATEGORIES_CATEGORY = {
  name: '__no-matching-categories-category',
  label: 'Other'
}

export default function organizePagesIntoCategories({ pages, categories }) {
  const mapped = pages.reduce((results, page) => {
    const pageCategories = page.frontmatter.categories || []
    const matchedCategories = categories.filter((category => pageCategories.indexOf(category.name) !== -1)) || [NO_MATCHING_CATEGORIES_CATEGORY]

    matchedCategories.forEach((category) => {
      results[category.name] = results[category.name] || { category, pages: [] }
      results[category.name].pages.push(page)
    })

    return results
  }, {})

  return Object.keys(mapped).map(category => mapped[category])
}
