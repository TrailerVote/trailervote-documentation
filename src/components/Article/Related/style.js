import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [1024]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default css`
  display: block;

  & .label {
    font-size: 0.7em;
    letter-spacing: 0.2em;
    padding:10px 0 0;
    text-transform:uppercase;
    font-weight:300;
    color:var(--lightTextColor);
    display:flex;
    align-items:center;
  }

  & .icon {
    width: 15px;
    stroke: var(--superLightGray);
    margin: 0px 5px 0px -5px;
  }

  & ul {
    margin: 0px 0px 1.5em;
    list-style: none;
  }

  & li {
    line-height: 1.4;
    position: relative;
    margin: 0.8em 0px;
    padding: 0px 5px 0px 20px;

    &::before {
      content: '';
      width: 4px;
      height: 4px;
      background: var(--firstActiveColor);
      position: absolute;
      top: 0.45em;
      left: 1px;
    }
  }

  & a {
    color: rgb(102, 102, 102);
    text-decoration: none;
  }
`
