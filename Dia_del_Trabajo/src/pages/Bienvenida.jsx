import { Container, Navbar, Nav, Row, Col, Card, Button, Carousel, } from 'react-bootstrap';
import miImagen from '../assets/sasa.jpg';


function Bienvenida() {
  return (
             <div className="bg-light" style={{ minHeight: '100vh' }}>
      
      {/* 1. BARRA DE NAVEGACIÓN */}


      {/* 2. SECCIÓN HERO (BIENVENIDA) */}
      <Container className="py-5 text-center my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold text-dark">¡Feliz 1 de mayo!</h1>
            
            <p className="lead text-muted mt-3">
¡Feliz Primero de Mayo! Hoy celebramos el esfuerzo, la dedicación y el talento de cada persona que, con su trabajo diario, construye un futuro mejor. Que este Día Internacional de los Trabajadores sea una oportunidad para descansar, recargar energías y sentir orgullo por todo lo que logras con tu constancia. ¡Gracias por tu valioso aporte y que pases un excelente día!
            </p>
          </Col>
        </Row>
      </Container>

      {/* 3. SECCIÓN DE TARJETAS (SERVICIOS) */}
      <Container id="servicios" className="">
        <Row className="g-4">
          
          {/* Tarjeta 1 */}
          <Col md={6}>
<Carousel>
          
          {/* DIAPOSITIVA 1 */}
          <Carousel.Item interval={3000}> {/* El intervalo cambia la foto cada 3 segundos */}
            <img
              className="d-block w-100 rounded"
              src="https://www.seorural.es/wp-content/uploads/2022/09/cual-es-el-perfil-de-un-obrero-descubre-aqui.jpg" // Imagen de prueba de internet
              alt="Primera diapositiva"
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <Carousel.Caption>
              <h3 style={{ 
    color: 'white', 
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' 
  }}>Trabajadores nobles</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/* DIAPOSITIVA 2 */}
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src="https://www.torontohispano.com/wp-content/uploads/2023/05/trabajos-en-toronto-1.png"
              alt="Segunda diapositiva"
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <Carousel.Caption>
              <h3 style={{ 
    color: 'white', 
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' 
  }}>Constructores de hogares</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/* DIAPOSITIVA 3 */}
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 rounded"
              src="https://static.vecteezy.com/system/resources/previews/027/298/490/non_2x/doctor-posing-portrait-free-photo.jpg"
              alt="Tercera diapositiva"
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <Carousel.Caption>
              <h3 style={{ 
    color: 'white', 
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' 
  }}>Salvadores de vidas</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        {/* AQUÍ TERMINA EL CARRUSEL */}
          </Col>

          {/* Tarjeta 2 */}
          <Col md={6}>
{/* AQUÍ EMPIEZA LA TARJETA */}
      <Card style={{ width: '30rem' }} className="shadow-sm">
        
        {/* Usamos 'miImagen' directamente en el src */}
        <Card.Img 
          variant="top" 
          src={miImagen} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        
        <Card.Body>
          <Card.Title>¡¡¡FESTEJEMOS!!!</Card.Title>
          <Card.Text>
            Festejar el Día del Trabajo es fundamental porque no solo celebramos el descanso, sino la dignidad, la historia y el esfuerzo de cada trabajador. Es un momento para mirar atrás y agradecer las luchas históricas que conquistaron los derechos laborales de los que hoy gozamos.
                      </Card.Text>
        </Card.Body>
      </Card>
      {/* AQUÍ TERMINA LA TARJETA */}
          </Col>

          {/* Tarjeta 3 */}

        </Row>
        <Row className="g-4">
          
          {/* Tarjeta 1 */}
          <Col md={4}>

    <Button variant="success">Botón Verde</Button>
          </Col>


          <Col md={4}>

    <Button variant="success">Botón Verde</Button>

          </Col>
          <Col md={4}>
<Button variant="success">Botón Verde</Button>
          </Col>



        </Row>
      </Container>

    </div>
  );
}

export default Bienvenida;