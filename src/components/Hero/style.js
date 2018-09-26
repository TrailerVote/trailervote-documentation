import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [1024]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default css`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: strech;
  padding: 0 10%;
  text-align: center;
  min-height: calc(100vh - 300px);

  & .logo {
    margin: 0 auto 2rem auto;
    max-width: 320px;

    & .st0 {
      fill: #2A303A;
    }

    & .st1 {
      fill: white;
    }
  }

  & .section {
    margin-bottom: 1rem;
  }

  & .navigation {
    padding: 1rem;
  }
`
