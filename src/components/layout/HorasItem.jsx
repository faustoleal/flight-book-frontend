const HorasItem = ({ hora }) => {
  return (
    <tr>
      <td>{hora.dia}</td>
      <td>{hora.horaSalida}</td>
      <td>{hora.desde}</td>
      <td>{hora.hasta}</td>
      <td>{hora.horaLlegada}</td>
      <td>{hora.finalidad}</td>
      <td>{hora.avion.modelo}</td>
      <td>{hora.avion.matricula}</td>
      <td>{hora.avion.potencia}</td>
      <td>{hora.avion.clase}</td>
      <td>{hora.localDiaP}</td>
      <td>{hora.localDiaC}</td>
      <td>{hora.localNocheP}</td>
      <td>{hora.localNocheC}</td>
      <td>{hora.travesiaDiaP}</td>
      <td>{hora.travesiaDiaC}</td>
      <td>{hora.travesiaNocheP}</td>
      <td>{hora.travesiaNocheC}</td>
      <td>{hora.aterrizajes}</td>
      <td>{hora.instructorDeVuelo}</td>
      <td>{hora.multiMotor}</td>
      <td>{hora.reactor}</td>
      <td>{hora.turboHelice}</td>
      <td>{hora.aeroaplicador}</td>
      <td>{hora.instrumentosRealP}</td>
      <td>{hora.instrumentosRealC}</td>
      <td>{hora.capota}</td>
    </tr>
  );
};

export default HorasItem;
