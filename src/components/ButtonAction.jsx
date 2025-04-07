import '../styles/ButtonAction.css';

function ButtonAction({ title, onClick }) {
  return (
    <button className="button-action" type="button" onClick={onClick}>
      {title}
    </button>
  );
}

export default ButtonAction;
