import { css, Global as EmGlobal } from '@emotion/react'
import { reset } from './reset'

function Global(): JSX.Element {
  return (
    <EmGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap');

        ${reset}

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          font-family: 'Barlow', sans-serif;
        }

        #root {
          height: 100%;
        }
      `}
    />
  )
}

export { Global }
