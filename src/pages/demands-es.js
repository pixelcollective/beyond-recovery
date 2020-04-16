import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Demand,
  SubDemand,
  Grid,
  Col,
  Container,
  Header,
  PageTitle,
  Img,
  PageSubTitle,
} from '../components/parts/demands'

/**
 * Page: Demands
 */
export default () => {
  const data = useStaticQuery(graphql`
    query {
      image01: file(relativePath: { eq: "images/30221094971_5494396af1_o.jpg" }) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image02: file(relativePath: { eq: "images/29676278054_4b8b6994ab_o.jpg" }) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Las Demandas"
        meta={[
          {
            name: 'description',
            content: 'Reclamaciones para asegurar comunidades saludables, estables, prósperas y un futuro para todxs.',
          },
          {
            name: 'keywords',
            content: 'beyond recovery, rent strike',
          },
        ]}>
        <html lang="es" />
      </Helmet>

      <Container>
        <Header>
          <Grid>
            <Col size="12">
              <PageTitle>Las Demandas</PageTitle>
              <PageSubTitle>
                Reclamaciones para asegurar comunidades saludables, estables, prósperas y un futuro para todxs
              </PageSubTitle>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <a
                className="button special"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform">
                Firme las demandas
              </a>
            </Col>

            <Col size="6">
              <Link className={'button'} to={'/demands'}>
                Read in English
              </Link>
            </Col>
          </Grid>
        </Header>

        <Grid>
          <Col size="6">
            <Img fluid={data.image01.childImageSharp.fluid} round={5} />
          </Col>

          <Col size="6">
            <Demand>Queremos un futuro libre de deudas.</Demand>
            <SubDemand>
              Cancelen los pagos de alquiler, hipotecas y servicios públicos inmediatamente. Nada de deudas nuevas.
            </SubDemand>
            <p>
              Cancelen los pagos de alquiler e hipotecas por la duración de la crisis de salud pública y económica para
              todxs lxs inquilinxs, propietarixs de hogares y pequeños negocios, y aseguren un período de recuperación
              de 3 meses.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <Demand>Garanticen hogares seguros y saludables para todxs ahora!</Demand>
            <SubDemand>
              Conviertan las unidades desocupadas en hogares seguros y disminuyan la propagación del COVID-19 sacando a
              la gente de las jaulas.
            </SubDemand>
          </Col>
        </Grid>

        <Grid>
          <Col size="6">
            <p>
              Debemos garantizar que cada persona tenga un hogar seguro y saludable. Exigimos que el gobierno local,
              estatal y federal conviertan todas las unidades vacantes en hogares seguros para las personas que están
              experimentando el desamparo, sin techo o que necesitan hogares saludables ahora.
            </p>

            <p>
              Además, hacemos eco de las reclamaciones de las personas encarceladas y detenidas y hacemos un llamado de
              acción para asegurar la salud y bienestar de ellxs y para mitigar la propagación del COVID-19.
            </p>
          </Col>

          <Col size="6">
            <p>
              Pedimos la libertad inmediata de todas las personas que están detenidas por razones de inmigración y/o con
              antelación a juicio. Solicitamos un aumento en la libertad temprana y por causa de edad y/o médica. Pongan
              en libertad inmediatamente a todas las personas de 50 años en adelante y a las que estén
              inmunocomprometidas y/o tengan condiciones médicas pre-existentes que las pongan en mayor riesgo de una
              infección COVID-19. Pongan en libertad a todas las personas a quienes les queden 90 días o menos de su
              sentencia y aceleren poner en libertad más rápidamente a las que les queden más de 90 días por cumplir.
              Pónganlas en libertad sin grilletes electrónicos.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <SubDemand>
              Ordenanzas para refugio permanente (o a largo plazo) y moratorias para los desahucios, desalojos,
              ejecuciones hipotecarias, redadas, barridas y la prevención del desamparo (quedar sin techo)
            </SubDemand>

            <p>
              Todas las personas deben poder permanecer en sus hogares; ser provistas de hogares adecuados;
              permitírseles refugiarse en sitio, tengan o no hogar; y mantener todas sus pertenencias para asegurar su
              salud y seguridad personal y pública. Las ciudades deberán proveerle apoyo completo a aquellos que estén
              “refugiándose en sitio” afuera.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <Demand>
              Prohiban los cortes de servicios públicos, los aumentos en las tasas y restauren los servicios a todos los
              hogares.
            </Demand>

            <p>
              Los servicios públicos como agua, gas, electricidad, teléfono e internet son vitales para nuestra salud
              personal y colectiva. Deben ser provistos como un bien público, especialmente durante una crisis de salud
              pública. Cualquier corte a estos servicios debe ser suspendido inmediatamente para todas las viviendas, no
              importa su capacidad de pago.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <Demand>
              Garanticen desempleo, tiempo por enfermedad, protecciones laborales y un ingreso básico para todxs.
            </Demand>
            <Grid>
              <Col size={5}>
                <Img fluid={data.image02.childImageSharp.fluid} round={5} />
              </Col>

              <Col size={6.8}>
                <SubDemand>
                  Garanticen desempleo, tiempo por enfermedad, protecciones laborales y un ingreso básico para todxs
                </SubDemand>
                <p>
                  Todas las personas, no importa su estatus, deben tener acceso a recursos para suplir sus necesidades,
                  seguridad y salud. Las personas efectuando trabajo esencial deben ser provistas con el equipo
                  necesario para mantenerlas seguras y con acceso a cuidado de sus seres queridos, tanto mayores como
                  niñxs.
                </p>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Container>
    </Layout>
  )
}
