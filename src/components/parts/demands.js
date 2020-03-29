import styled from '@emotion/styled'

const space = 1.5
const nudge = 2
const smallScreen = `980px`

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
  }
`

const Container = styled(Grid)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 0 ${space}rem 0 ${space}rem !important;
`

const Col = styled.div`
  width: ${(props) => (props.size / 12) * 100 - 2}%;
  display: flex;
  flex-direction: column;
  margin: ${space / 2}rem auto ${space / 2}rem auto;

  &::first-of-type,
  &::last-of-type {
    width: ${(props) => (props.size / 12) * 100}%;
  }

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
    width: 100%;
  }
`

const Header = styled.header`
  margin: ${space * nudge}rem 0 ${space}rem 0;
`

const PageTitle = styled.h1`
  font-family: 'Kalam Bold', 'Kalam';
  font-size: 4rem;
  letter-spacing: 0.1ch;
  margin-bottom: 0;
  padding-bottom: 0;
`

const PageSubTitle = styled.h3`
  margin-bottom: 0;
  padding-bottom: 1rem;
`

const Demand = styled.h2`
  font-family: 'Kalam Bold', 'Kalam';
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`

const SubDemand = styled.h3`
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-color: rgba(255, 255, 255, 0.4);
`

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.round || 0}px;
`

export { Demand, SubDemand, Grid, Col, Container, Header, PageTitle, Image, PageSubTitle }
