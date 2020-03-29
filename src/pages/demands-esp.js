import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic1 from '../assets/images/29676270444_5e09913cd5_o.jpg'
import pic2 from '../assets/images/30220396141_e45769c364_o.jpg'
import pic3 from '../assets/images/30221094971_5494396af1_o.jpg'
import pic4 from '../assets/images/30220593851_55f8bc7af5_o.jpg'
import pic5 from '../assets/images/29676278054_4b8b6994ab_o.jpg'

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.round || 0}px;
`

const space = 1.5
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

const Generic = (props) => (
  <Layout>
    <Helmet>
      <title>Las Demandas</title>
      <meta
        name="description"
        content="Reclamaciones para asegurar comunidades saludables, estables, prósperas y un futuro para todxs."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Las Demandas</h1>
            <h3>Reclamaciones para asegurar comunidades saludables, estables, prósperas y un futuro para todxs </h3>
            <Grid>
              <Col size="6">
                <a
                  className="button special"
                  href="https://docs.google.com/document/d/11sj4fTAsi5bnK0lCB2z8sOSodqBOO6OOkTP-41yVMpg/">
                  Firme las demandas
                </a>
              </Col>
              <Col size="6">
                <Link className="button" to="/demands">
                  Read in English
                </Link>
              </Col>
            </Grid>
          </header>
          <hr />

          <Grid>
            <Col size="6">
              <Image src={pic3} round={5} />
            </Col>

            <Col size="6">
              <h2>
                Cancelen los pagos de alquiler, hipotecas y servicios públicos inmediatamente. Nada de deudas nuevas.
              </h2>
            </Col>

            <Col size="12">
              <p>
                Cancelen los pagos de alquiler e hipotecas por la duración de la crisis de salud pública y económica
                para todxs lxs inquilinxs, propietarixs de hogares y pequeños negocios, y aseguren un período de
                recuperación de 3 meses.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic4} round={5} />
            </Col>

            <Col size="6">
              <h2>¡Garanticen hogares seguros y saludables para todxs ahora! </h2>
              <h3>
                Conviertan las unidades desocupadas en hogares seguros y disminuyan la propagación del COVID-19 sacando
                a la gente de las jaulas.
              </h3>
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
                Además, hacemos eco de las reclamaciones de las personas encarceladas y detenidas y hacemos un llamado
                de acción para asegurar la salud y bienestar de ellxs y para mitigar la propagación del COVID-19.
              </p>
            </Col>

            <Col size="6">
              <p>
                Pedimos la libertad inmediata de todas las personas que están detenidas por razones de inmigración y/o
                con antelación a juicio. Solicitamos un aumento en la libertad temprana y por causa de edad y/o médica.
                Pongan en libertad inmediatamente a todas las personas de 50 años en adelante y a las que estén
                inmunocomprometidas y/o tengan condiciones médicas pre-existentes que las pongan en mayor riesgo de una
                infección COVID-19. Pongan en libertad a todas las personas a quienes les queden 90 días o menos de su
                sentencia y aceleren poner en libertad más rápidamente a las que les queden más de 90 días por cumplir.
                Pónganlas en libertad sin grilletes electrónicos.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <h3>
                Ordenanzas para refugio permanente (o a largo plazo) y moratorias para los desahucios, desalojos,
                ejecuciones hipotecarias, redadas, barridas y la prevención del desamparo (quedar sin techo)
              </h3>

              <p>
                Todas las personas deben poder permanecer en sus hogares; ser provistas de hogares adecuados;
                permitírseles refugiarse en sitio, tengan o no hogar; y mantener todas sus pertenencias para asegurar su
                salud y seguridad personal y pública. Las ciudades deberán proveerle apoyo completo a aquellos que estén
                “refugiándose en sitio” afuera.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic2} round={5} />
            </Col>

            <Col size="6">
              <h2>
                Prohiban los cortes de servicios públicos, los aumentos en las tasas y restauren los servicios a todos
                los hogares.
              </h2>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <p>
                Los servicios públicos como agua, gas, electricidad, teléfono e internet son vitales para nuestra salud
                personal y colectiva. Deben ser provistos como un bien público, especialmente durante una crisis de
                salud pública. Cualquier corte a estos servicios debe ser suspendido inmediatamente para todas las
                viviendas, no importa su capacidad de pago.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic5} round={5} />
            </Col>

            <Col size="6">
              <h2>
                Garanticen desempleo, tiempo por enfermedad, protecciones laborales y un ingreso básico para todxs.
              </h2>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <p>
                Todas las personas, no importa su estatus, deben tener acceso a recursos para suplir sus necesidades,
                seguridad y salud. Las personas efectuando trabajo esencial deben ser provistas con el equipo necesario
                para mantenerlas seguras y con acceso a cuidado de sus seres queridos, tanto mayores como niñxs.
              </p>
            </Col>
          </Grid>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
