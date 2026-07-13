const HorasItemParaPython = ({ hora }) => {
  return (
    <tr>
      <td>{hora.dia}</td>
      <td>{hora.hora_salida}</td>
      <td>{hora.desde}</td>
      <td>{hora.hasta}</td>
      <td>{hora.hora_llegada}</td>
      <td>{hora.finalidad}</td>
      <td>{hora.avion.modelo}</td>
      <td>{hora.avion.matricula}</td>
      <td>{hora.avion.potencia}</td>
      <td>{hora.avion.clase}</td>
      <td>{hora.local_dia_p}</td>
      <td>{hora.local_dia_c}</td>
      <td>{hora.local_noche_p}</td>
      <td>{hora.local_noche_c}</td>
      <td>{hora.travesia_dia_p}</td>
      <td>{hora.travesia_dia_c}</td>
      <td>{hora.travesia_noche_p}</td>
      <td>{hora.travesia_noche_c}</td>
      <td>{hora.aterrizajes}</td>
      <td>{hora.instructor_de_vuelo}</td>
      <td>{hora.multi_motor}</td>
      <td>{hora.reactor}</td>
      <td>{hora.turbo_helice}</td>
      <td>{hora.aeroaplicador}</td>
      <td>{hora.instrumentos_real_p}</td>
      <td>{hora.instrumentos_real_c}</td>
      <td>{hora.capota}</td>
    </tr>
  );
};

export default HorasItemParaPython;
