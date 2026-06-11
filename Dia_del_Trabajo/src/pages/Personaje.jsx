import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
// Si estás en un archivo dentro de la carpeta 'pages', recuerda cambiar la ruta a: '../assets/tu-imagen.jpg'
import miImagenTarjeta from '../assets/hero.png'; 
const proyectos = [
    { id: 1, titulo: "George Engel (1836–1887)", desc: "Obrero textil y carismático predicador inglés de 39 años. Era quien estaba hablando en el estrado justo cuando llegó la policía y estalló la bomba; fue condenado a muerte, pero su pena se conmutó por cadena perpetua y finalmente fue indultado en 1893.", img: "https://tse4.mm.bing.net/th/id/OIP.iTul0WPHrElJtGWAazDFfAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 2, titulo: "Adolph Fischer (1858–1887)", desc: "Periodista y tipógrafo alemán de 30 años que trabajaba en el diario obrero Arbeiter-Zeitung. Fue el encargado de imprimir las proclamas que convocaban a la manifestación y, pese a tener coartada el día del atentado, fue condenado a muerte y ahorcado.", img: "https://th.bing.com/th/id/R.64e21179d6d45d489a337c9c3d7161f5?rik=4qbRdmA1uqWyuA&pid=ImgRaw&r=0" },
    { id: 3, titulo: "PSamuel Fielden (1847–1922)", desc: "Periodista estadounidense de 39 horas y uno de los principales líderes de la campaña por las 8 horas laborales. Tras los disturbios huyó de la ciudad, pero decidió entregarse voluntariamente para pasar el juicio junto a sus compañeros, terminando ejecutado en la horca.", img: "https://th.bing.com/th/id/OIP.ahIx8mlvzJ49EFExTBD65AAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 4, titulo: "Albert Parsons (1848–1887)", desc: "Carpintero alemán de 22 años y el más joven del grupo, de ideología anarquista combativa. Fue arrestado bajo la acusación de fabricar explosivos y, un día antes de ser ejecutado en la horca, decidió suicidarse en su celda haciendo estallar un cartucho de dinamita.", img: "https://th.bing.com/th/id/R.3485e3041034830f4eb6783229e51da0?rik=MiLxod5CO4xCQA&pid=ImgRaw&r=0" },
    { id: 5, titulo: "Louis Lingg (1864–1887)", desc: "Tipógrafo y periodista alemán de 33 años, coeditor del Arbeiter-Zeitung. No se encontraba en el lugar de los hechos porque estaba dando un discurso en otro mitin, pero aun así fue sentenciado a muerte, pena rebajada a cadena perpetua antes de ser indultado en 1893.", img: "https://tse2.mm.bing.net/th/id/OIP.ECEqM1ROTiHJKOizNZa6hgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 6, titulo: "Michael Schwab (1853–1898)", desc: "Intelectual y periodista alemán de 31 años, director del principal periódico obrero de Chicago y organizador de la protesta de Haymarket en rechazo a la violencia policial. Fue ejecutado en la horca tras pronunciar su famosa frase sobre el poder de su futuro silencio", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Michael_Schwab_portrait.jpg/250px-Michael_Schwab_portrait.jpg" },
  ];

function Historia() {
  return (
<Container className="my-5">
      {/* Título de la sección */}
      <h2 className="text-center mb-4 fw-bold text-dark">HEROES SIN CAPA</h2>
      <p className="bg-dark text-center mb-5 text-warning">Nada seria posible sin elllos</p>

      {/* La Fila contenedora. 'g-4' añade una separación perfecta entre las tarjetas */}
      <Row className="g-4">
        
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id} xs={12} sm={6} md={4}>
            {/* xs={12} -> En celulares se ve 1 tarjeta por fila
              sm={6}  -> En pantallas medianas se ven 2 tarjetas por fila
              md={4}  -> En computadoras se ven 3 tarjetas por fila (3 arriba, 3 abajo)
            */}
            <Card className="shadow-sm border-0 h-100">
              <Card.Img 
                variant="top" 
                src={proyecto.img} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{proyecto.titulo}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {proyecto.desc}
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>
    </Container>
  );
}

export default Historia;