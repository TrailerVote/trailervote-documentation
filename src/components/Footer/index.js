import * as React from 'react'

import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [1024]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const footer = css`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  margin: 60px 0 20px;
  ${mq({
    margin: ['60px 0 60px', '60px 0 20px'],
  })};
  .links ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 1.1;
  }
  .links a {
    text-decoration: none;
    color: #777;
    font-weight: bold;
  }
  .links li {
    text-align: center;
    margin: 2px 10px;
    position: relative;
  }
  .copyright {
    font-size: 0.8em;
    text-align: center;
    margin: 10px 0 30px;
    & p {
      color: var(--superLightTextColor);
    }
  }
  .credits {
    font-size: 0.8em;
    color: var(--superLightTextColor);
    margin: 20px 0 0;
    text-align: center;
    & a {
      text-decoration: none;
      color: var(--lightTextColor);
    }
  }
`


export default function Footer() {
  return (
    <footer className={footer}>
      <div className="links">
        <ul>
          <li><a href="https://github.com/TrailerVote" target="_blank" rel="nofollow noopener noreferrer">Github</a></li>
          <li><a href="https://www.trailervote.com" target="_blank" rel="nofollow noopener noreferrer">Website</a></li>
        </ul>
      </div>
      <div className="copyright"><p>Copyright 2018 TrailerVote</p></div>
    </footer>
  )
}
