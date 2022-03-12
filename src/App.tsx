import styled from '@emotion/styled'
import { ReactComponent as LogoBase } from 'assets/shared/logo.svg'
import backgroundMobile from 'assets/home/background-home-mobile.jpg'

const Container = styled.div`
  color: white;
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-position: bottom right;
  height: 100%;
  padding: 1.5rem;
  padding-block-end: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled(LogoBase)`
  width: 40px;
  aspect-ratio: 1;
`

const Subtitle = styled.p`
  font-family: 'Barlow Condensed';
  font-size: 1em;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.7px;

  color: #d0d6f9;

  margin-bottom: 1rem;
`

const Heading = styled.h1`
  font-family: 'Bellefair';
  font-size: 5em;
  line-height: 100px;
  /* identical to box height, or 125% */

  text-align: center;

  color: #ffffff;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: 0.9375em;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #d0d6f9;
`

const Button = styled.button`
  font-family: 'Bellefair';
  font-size: 1.25em;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1.25px;

  color: #0b0d17;
  text-transform: uppercase;
  border: none;

  background-color: #fff;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 9.375rem;
  padding: 0;
  margin-block-start: auto;
`

const Header = styled.header`
  width: 100%;
  margin-bottom: 3rem;
`

export function App(): JSX.Element {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
      <Heading>SPACE</Heading>
      <Text>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Text>
      <Button type="button">Explore</Button>
    </Container>
  )
}
