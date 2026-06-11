import { Container, Accordion, Badge, Row, Col } from 'react-bootstrap';

export default function DiaDelTrabajo() {
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      
      {/* ELEMENTO 1: HERO / JUMBOTRON INFORMATIVO */}
      <div className="bg-dark text-white py-5 text-center shadow-sm" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://tse4.mm.bing.net/th/id/OIP.tGmNdh72cZOF_viDdz1G-wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container className="py-4">
          <Badge bg="danger" className="mb-2 px-3 py-2 text-uppercase fw-bold">Feriado Nacional</Badge>
          <h1 className="display-4 fw-bold">1 de Mayo en Bolivia</h1>
          <p className="lead text-warning fw-semibold">Día del Trabajo</p>
          <p className="mx-auto" style={{ maxWidh: '700px' }}>
            Una jornada de descanso, reflexión y reivindicación de los derechos laborales de todos los trabajadores bolivianos en el área urbana y rural.
          </p>
        </Container>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={9}>
            
            <h2 className="text-center mb-4 text-secondary">Aspectos Clave de la Fecha</h2>

            {/* ELEMENTO 2: ACORDEÓN DE BOOTSTRAP */}
            <Accordion defaultActiveKey="0" className="shadow-sm">
              
              {/* Sección 1 */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="fw-bold text-dark">Significado del Feriado</span>
                </Accordion.Header>
                <Accordion.Body>
                  En Bolivia, el 1 de mayo es un <strong>feriado nacional obligatorio</strong> con suspensión de actividades públicas y privadas. Está amparado por las leyes laborales del país y busca honrar la lucha histórica por la jornada laboral de las 8 horas.
                </Accordion.Body>
              </Accordion.Item>

              {/* Sección 2 */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="fw-bold text-dark">Tradiciones y Marchas</span>
                </Accordion.Header>
                <Accordion.Body>
                  Tradicionalmente, la Central Obrera Boliviana (COB) junto a los diferentes sindicatos, federaciones de mineros, fabriles y constructores marchan en las principales capitales del país. Es común que el Presidente del Estado participe y promulgue nuevos decretos o anuncie el incremento salarial en beneficio de los trabajadores.
                </Accordion.Body>
              </Accordion.Item>

              {/* Sección 3 */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="fw-bold text-dark">Origen Histórico</span>
                </Accordion.Header>
                <Accordion.Body>
                  Al igual que en el resto del mundo, la fecha conmemora a los <strong>Mártires de Chicago</strong> de 1886, quienes iniciaron una huelga masiva en Estados Unidos demandando condiciones laborales justas, un evento que transformó la historia del trabajo a nivel global.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          </Col>
        </Row>
      </Container>

    </div>
  );
}