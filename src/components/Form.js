// Importer les éléments dont on a besoin pour utiliser les state nécessaires ici
import { useDispatch } from "react-redux";
import {} from "../actions/actions-types";
// ainsi que les hooks

const Form = () => {
  // dans une constante on récupère dragon dans notre state
  const { dragon } = state;
  // on oublie pas le dispatch
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    // à la soumission du form on ajoute le dragon appel du dispatch

    dispatch({ type: "ADD_DRAGON" });
  };

  const handleChange = (e) => {
    // récup de la valeur de l'input appel du dispatch
    const { value } = e.target;
    dispatch({ type: "DRAGON", dragon: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom:</label>
      <input onChange={handleChange} value={dragon} type="text" />
      <button>Ajouter</button>
    </form>
  );
};

export default Form;
