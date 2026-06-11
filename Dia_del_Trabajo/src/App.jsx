import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import miImagen from './assets/sasa.jpg'; 
import Historia from './pages/Historia'; 
import Personaje from './pages/Personaje'; 
import Feriado from './pages/Feriado'; 

function App() {
  return (
    <Router>
      {/* Contenedor Flex para obligar al footer a quedarse abajo siempre */}
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        
        {/* BARRA DE NAVEGACIÓN (Se queda fija arriba) */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            {/* Corregido a "/" para ir al inicio */}
            <Navbar.Brand as={Link} to="/">Día del Trabajo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* Corregido a "/" para ir a tu página de presentación */}
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/historia">Historia</Nav.Link>
                <Nav.Link as={Link} to="/personaje">Personaje</Nav.Link>
                <Nav.Link as={Link} to="/feriado">Feriado</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* CONTENIDO DINÁMICO (flex-grow-1 expande esta sección) */}
        <div className="flex-grow-1">
          <Routes>
            {/* RUTA DE LA PÁGINA PRINCIPAL */}
            <Route path="/" element={
 <div className="bg-light" style={{ minHeight: '100vh' }}>
      
      {/* 1. BARRA DE NAVEGACIÓN */}


      {/* 2. SECCIÓN HERO (BIENVENIDA) */}
      <Container className="py-5 text-center my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold text-dark">¡Feliz 1 de mayo!</h1>
            <p className='bg-dark text-center mb-5 text-warning'>Conoce todo acerca de esta fecha</p>
            <p className="lead text-muted mt-3">
¡Feliz Primero de Mayo! Hoy celebramos el esfuerzo, la dedicación y el talento de cada persona que, con su trabajo diario, construye un futuro mejor. Que este Día Internacional de los Trabajadores sea una oportunidad para descansar, recargar energías y sentir orgullo por todo lo que logras con tu constancia. ¡Gracias por tu valioso aporte y que pases un excelente día!
            </p>
          </Col>
        </Row>
      </Container>

      {/* 3. SECCIÓN DE TARJETAS (SERVICIOS) */}
      <Container id="servicios" className="" >
        <Row className="g-4 my-5">
          
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



        </Row>
      </Container>

    </div>
            } />

            {/* RUTAS DE LAS DEMÁS PÁGINAS */}
            <Route path="/historia" element={<Historia />} />
            <Route path="/personaje" element={<Personaje />} />
            {/* Ojo: cambié "Feriado" a minúscula en el path para que coincida con tu Navbar */}
            <Route path="/feriado" element={<Feriado />} />
          </Routes>
        </div>

        {/* ====== TU NUEVO FOOTER ====== */}
        <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
          <Container>
            <Row className="g-4 align-items-center">
              
              {/* Columna Izquierda: Título del proyecto */}
              <Col xs={12} md={6} className="text-center text-md-start">
              
                <p className="small text-muted mb-0">
                  Un espacio dedicado a la historia, los derechos laborales y los personajes clave del movimiento obrero.
                </p>
              </Col>

              {/* Columna Derecha: Créditos del Desarrollador */}
              <Col xs={12} md={6} className="text-center text-md-end">
                <h6 className="fw-bold text-light mb-1">Pagina Hecha por:</h6>
                <p className="small text-warning mb-0">Sandi Frank Lunario Jordan,2026</p>
                <span className="text-muted extra-small" style={{ fontSize: '0.8rem' }}>Gestión 2026</span>
              </Col>

            </Row>

            {/* Línea divisoria */}
            <hr className="border-secondary my-3" />
            
            {/* Fila de Derechos Reservados */}
            <Row>
              <Col className="text-center text-muted small" style={{ fontSize: '0.85rem' }}>
                <p className="mb-0 text-warning">&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
              </Col>
            </Row>
          </Container>
        </footer>

      </div>
    </Router>
  );
}

export default App;