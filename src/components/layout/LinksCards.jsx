import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LINKSCARDS = [
  {
    img: "/img/libro-vuelo.webp",
    title: "Tu libro de vuelo",
    description: "Aqui puedes encontrar tu libro totalmente detallado ",
    link: "/libro-vuelo",
  },
  {
    img: "/img/horas-form.webp",
    title: "Anotar hora",
    description: "Formulario para registrar un nuevo vuelo",
    link: "/libro-vuelo/agregar-hora",
  },
];

const LinksCards = () => {
  return (
    <>
      {LINKSCARDS.map((card, i) => (
        <Link className="link-card" to={card.link} key={i}>
          <Card>
            <Card.Img variant="top" src={card.img} />
            <Card.Body className="text-start link-card-body">
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default LinksCards;
