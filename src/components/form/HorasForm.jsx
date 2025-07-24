import AvionForm from "./AvionForm";
import useDefaultValue from "../../hooks/useDefaultValue";
import DiscriminacionInput from "../layout/DiscriminacionInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createHoras } from "../../reducers/horasReducer";
import { useEffect, useState } from "react";
import useString from "../../hooks/useString";
import useSelect from "../../hooks/useSelect";

const HorasForm = () => {
  const tiemposInitialState = {
    localDiaP: "0",
    localDiaC: "0",
    localNocheP: "0",
    localNocheC: "0",
    travesiaDiaP: "0",
    travesiaDiaC: "0",
    travesiaNocheP: "0",
    travesiaNocheC: "0",
  };

  const [show, setShow] = useState(false);

  const dia = useString("date");
  const horaSalida = useString("time");
  const desde = useString("text");
  const hasta = useString("text");
  const horaLlegada = useString("time");
  const finalidad = useSelect();
  const avionMatricula = useSelect();
  const [tiemposDeVuelo, setTiemposDeVuelo] = useState("");
  const [tiempos, setTiempos] = useState(tiemposInitialState);
  const [tiempo, setTiempo] = useState("0");
  const aterrizajes = useDefaultValue("0");
  const instructorDeVuelo = useDefaultValue("0");
  const reactor = useDefaultValue("0");
  const multiMotor = useDefaultValue("0");
  const turboHelice = useDefaultValue("0");
  const aeroaplicador = useDefaultValue("0");
  const instrumentosRealP = useDefaultValue("0");
  const instrumentosRealC = useDefaultValue("0");
  const capota = useDefaultValue("0");

  const dispatch = useDispatch();

  useEffect(() => {
    if (tiemposDeVuelo && tiempo) {
      setTiempos((prev) => ({
        ...prev,
        [tiemposDeVuelo]: tiempo,
      }));
    }
  }, [tiemposDeVuelo, tiempo]);

  const handleCreateHora = (e) => {
    e.preventDefault();

    const newHora = {
      dia: dia.value,
      horaSalida: horaSalida.value,
      desde: desde.value,
      hasta: hasta.value,
      horaLlegada: horaLlegada.value,
      finalidad: finalidad.value,
      avionMatricula: avionMatricula.value,
      ...Object.fromEntries(
        Object.entries(tiempos).map(([k, v]) => [k, parseFloat(v)])
      ),
      aterrizajes: parseInt(aterrizajes.value),
      instructorDeVuelo: parseFloat(instructorDeVuelo.value),
      reactor: parseFloat(reactor.value),
      multiMotor: parseFloat(multiMotor.value),
      turboHelice: parseFloat(turboHelice.value),
      aeroaplicador: parseFloat(aeroaplicador.value),
      instrumentosRealC: parseFloat(instrumentosRealC.value),
      instrumentosRealP: parseFloat(instrumentosRealP.value),
      capota: parseFloat(capota.value),
    };

    dispatch(createHoras(newHora));
    dia.onReset();
    horaSalida.onReset();
    desde.onReset();
    hasta.onReset();
    horaLlegada.onReset();
    finalidad.onReset();
    avionMatricula.onReset();
    setTiempo("0");
    setTiemposDeVuelo("");
    setTiempos(tiemposInitialState);
    aterrizajes.onReset();
    instructorDeVuelo.onReset();
    reactor.onReset();
    turboHelice.onReset();
    multiMotor.onReset();
    aeroaplicador.onReset();
    instrumentosRealP.onReset();
    instrumentosRealC.onReset();
    capota.onReset();
  };

  return (
    <>
      <div className="horas mt-3">
        <div className="form">
          <h2>Nueva Hora</h2>
          <Form className="w-1'0''0' p-2" onSubmit={handleCreateHora}>
            <section className="itinerario">
              <Form.Group className="mb-3 itinerario-item" controlId="dia">
                <Form.Label>Fecha</Form.Label>
                <Form.Control {...dia} />
              </Form.Group>
              <Form.Group
                className="mb-3 itinerario-item"
                controlId="hora_de_salida"
              >
                <Form.Label>Hora de Salida</Form.Label>
                <Form.Control {...horaSalida} />
              </Form.Group>
              <Form.Group className="mb-3 itinerario-item" controlId="desde">
                <Form.Label>Desde</Form.Label>
                <Form.Control {...desde} />
              </Form.Group>
              <Form.Group className="mb-3 itinerario-item" controlId="hasta">
                <Form.Label>Hasta</Form.Label>
                <Form.Control {...hasta} />
              </Form.Group>
              <Form.Group
                className="mb-3 itinerario-item"
                controlId="hora_de_llegada"
              >
                <Form.Label>Hora de llegada</Form.Label>
                <Form.Control {...horaLlegada} />
              </Form.Group>
            </section>
            <section className="utils">
              <Form.Group
                className="mb-3 utils-form-group"
                controlId="finalidad"
              >
                <Form.Label>Finalidad del Vuelo</Form.Label>
                <Form.Select {...finalidad}>
                  <option>Seleccionar finalidad</option>
                  <option value="ENT">ENT</option>
                  <option value="INST">INST</option>
                  <option value="READP">READP</option>
                  <option value="EXA">EXA</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 utils-form-group" controlId="avion">
                <Form.Label>Avion</Form.Label>
                <div className="align-container d-flex">
                  <Form.Select {...avionMatricula}>
                    <option>Seleccionar avion</option>
                    <option value="LV-CMC">LV-CMC</option>
                    <option value="LV-WHU">LV-WHU</option>
                  </Form.Select>
                  <Button className="avionBtn" onClick={() => setShow(true)}>
                    Agregar Avion
                  </Button>
                </div>
              </Form.Group>
            </section>
            <section className="tiempos-de-vuelo">
              <Form.Group
                className="mb-3 tiempos-vuelo-item"
                controlId="tiempos_de_vuelo"
              >
                <Form.Label>Tiempos de Vuelo</Form.Label>
                <Form.Select
                  value={tiemposDeVuelo}
                  onChange={({ target }) => setTiemposDeVuelo(target.value)}
                >
                  <option>Seleccionar tiempos</option>
                  <option value="localDiaP">local dia piloto</option>
                  <option value="localDiaC">local dia copiloto</option>
                  <option value="localNocheP">local noche piloto</option>
                  <option value="localNocheC">local noche copiloto</option>
                  <option value="travesiaDiaP">travesia dia piloto</option>
                  <option value="travesiaDiaC">travesia dia copiloto</option>
                  <option value="travesiaNocheP">travesia noche piloto</option>
                  <option value="travesiaNocheC">
                    travesia noche copiloto
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3  tiempos-vuelo-item"
                controlId="tiempo"
              >
                <Form.Label>Tiempo</Form.Label>
                <Form.Control
                  type="text"
                  value={tiempo}
                  onChange={({ target }) => setTiempo(target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3  tiempos-vuelo-item"
                controlId="aterrizajes"
              >
                <Form.Label>Aterrizajes</Form.Label>
                <Form.Control {...aterrizajes} />
              </Form.Group>
            </section>
            <section className="discriminacion-tiempos">
              <h2 className="w-100">Discriminacion Tiempos</h2>
              <DiscriminacionInput
                label="instructor de vuelo"
                {...instructorDeVuelo}
              />
              <DiscriminacionInput label="multi-motor" {...multiMotor} />
              <DiscriminacionInput label="reactor" {...reactor} />

              <DiscriminacionInput label="turbo helice" {...turboHelice} />
              <DiscriminacionInput label="aeroaplicador" {...aeroaplicador} />
              <DiscriminacionInput
                label="instrumentos piloto"
                {...instrumentosRealP}
              />
              <DiscriminacionInput
                label="instrumentos copiloto"
                {...instrumentosRealC}
              />
              <DiscriminacionInput label="capota" {...capota} />
            </section>
            <Button type="submit">Agregar Hora</Button>
          </Form>
        </div>
      </div>
      <AvionForm show={show} setShow={setShow} />
    </>
  );
};

export default HorasForm;
