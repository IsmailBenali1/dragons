// Importer les éléments dont on a besoin pour utiliser les state nécessaires ici
// ainsi que les hooks

import { useDispatch, useSelector } from "react-redux";
import { addDragon, setDragon } from "../actions/actions-types";

const Form = () => {
  const { dragon } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addDragon());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // pratique si vous avez plusieurs champs à contrôler
    // voir le reducer
    dispatch(setDragon({ name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name (dragon) :
        <Input onChange={handleChange} value={dragon} name="dragon" />
      </label>
      <button>Add</button>
    </form>
  );
};

export default Form;
