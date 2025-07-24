import {
  Sunny,
  Bedtime,
  Map,
  Home,
  FlightLand,
  Flight,
  SportsEsports,
} from "@mui/icons-material";
import { Carousel, Card, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeTotales } from "../../reducers/totalesReducer";

const CARDS = [
  [
    {
      icon: <Flight sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Horas totales",
      key: "total_horas",
    },
    {
      icon: <Sunny sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Horas diurnas",
      key: "total_dia",
    },
    {
      icon: <Bedtime sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Horas nocturnas",
      key: "total_noche",
    },
  ],
  [
    {
      icon: <SportsEsports sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Piloto al mando",
      key: "total_alMando",
    },
    {
      icon: <Home sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Vuelo local",
      key: "total_local",
    },
    {
      icon: <Map sx={{ fontSize: "3.25rem" }} />,
      subtitle: "En travesia",
      key: "total_travesia",
    },
  ],
  [
    {
      icon: <FlightLand sx={{ fontSize: "3.25rem" }} />,
      subtitle: "Aterrizajes",
      key: "total_aterrizajes",
    },
  ],
];

const CardsCarousel = () => {
  const dispatch = useDispatch();
  const totales = useSelector((state) => state.totales);

  useEffect(() => {
    dispatch(initializeTotales());
  }, [dispatch]);

  if (!totales) return <div>Cargando...</div>;

  return (
    <Carousel className="totales-carousel" indicators={false}>
      {CARDS.map((group, idx) => (
        <Carousel.Item key={idx}>
          <CardGroup className="carousel-card-group">
            {group.map((card, i) => (
              <Card className="carousel-card" key={i}>
                <Card.Body className="carousel-card-body">
                  <Card.Title>{card.icon}</Card.Title>
                  <Card.Subtitle style={{ fontSize: "1.25rem" }}>
                    {card.subtitle}
                  </Card.Subtitle>
                  {card.key === "total_aterrizajes" ? (
                    <Card.Text style={{ fontSize: "1rem" }}>
                      {totales[card.key] === null ? "0" : totales[card.key]}
                    </Card.Text>
                  ) : (
                    <Card.Text style={{ fontSize: "1rem" }}>
                      {totales[card.key] === null
                        ? "0 hrs"
                        : `${totales[card.key]} hrs`}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardsCarousel;
