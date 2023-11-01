import './Estilos.css'

export function Mostar(props) {
  return (
    <div>
      <h1>
        {" "}
        {props.name} , {props.edad}
      </h1>
    </div>
  );
}
