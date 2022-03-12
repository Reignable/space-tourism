import { css, Global as EmGlobal } from '@emotion/react'
import { reset } from './reset'

function Global(): JSX.Element {
  return (
    <EmGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@500&display=swap');

        ${reset}

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          background-size: 100%;
          font-family: 'Spartan', sans-serif;
        }
      `}
    />
  )
}

export { Global }
