import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
// Si estás en un archivo dentro de la carpeta 'pages', recuerda cambiar la ruta a: '../assets/tu-imagen.jpg'
import miImagenTarjeta from '../assets/hero.png'; 

function Historia() {
  return (
    
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold text-dark">¡¡UN DIA HISTORICO!!</h2>
      <p className='bg-dark text-center mb-5 text-warning'>Un dia historico acompañado de una gran batalla</p>
      {/* Creamos la fila principal */}
      <Row className="align-items-center g-4"> 
        {/* 'align-items-center' centra todo verticalmente y 'g-4' da espacio entre las columnas */}

        {/* 1. COLUMNA IZQUIERDA: LA TARJETA (Ocupa 4 de 12 partes en pantallas grandes) */}
        <Col xs={12} md={4}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Img 
              variant="top" 
              src="https://th.bing.com/th/id/R.3efd69637a5199680335e53a0d3c3bb0?rik=tPoxskjw%2f0AoMA&pid=ImgRaw&r=0" 
              style={{ height: '220px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title className="fw-bold text-dark">1 de mayo</Card.Title>
              <Card.Text className="text-muted">
                De Chicago a nuestros días, la pelea por la jornada laboral revela una verdad incómoda: lo que ayer fue una conquista arrancada con sangre, hoy sigue siendo un límite que el capital intenta imponer. Frente a ello, levantamos una perspectiva radical: trabajar menos, trabajar todos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 2. COLUMNA DERECHA: EL CARRUSEL (Ocupa 8 de 12 partes en pantallas grandes) */}
        <Col xs={12} md={8}>
          <Carousel className="shadow-sm rounded overflow-hidden">
            
            {/* Foto 1 del Carrusel */}
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://media.losandes.com.ar/adjuntos/368/migration/resizer/v2/HT75FIUWMFGJ3FBN6TXZKXL5JU.jpg?auth=fac22358a3689cf33f21a055959ea4fc69016f57d977df13bb39f2dbff4b1786&width=1920&height=1080"
                alt="Proyecto Uno"
                style={{ height: '420px', objectFit: 'cover' }}
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

            {/* Foto 2 del Carrusel */}
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://infoagro.com.ar/wp-content/uploads/2022/04/1-de-mayo.jpg"
                alt="Proyecto Dos"
                style={{ height: '420px', objectFit: 'cover' }}
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Col>

      </Row>
      <p>La batalla de Chicago por la jornada laboral de ocho horas es un símbolo de la lucha del movimiento obrero por condiciones laborales justas y dignas. La huelga de 1886 en Chicago, que culminó en la masacre de Haymarket, fue un punto de inflexión en la historia laboral de Estados Unidos. Los trabajadores exigían una jornada laboral de ocho horas, lo que se convirtió en un derecho fundamental para muchos. Aunque el Día Internacional del Trabajador se celebra en muchos países, en Estados Unidos se conmemora el primer lunes de septiembre, una decisión tomada por el ex presidente Grover Cleveland para evitar la influencia socialista en el país.</p>
    </Container>
  );
}

export default Historia;