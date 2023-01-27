import { ADD_DRAGON } from "../constants/actions";

// initialisation des states : SOURCE DE VERITE
let stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  count: 3,
  dragon: "",
  message: "",
};

let reducerDragon = (state = stateInit, action = {}) => {
  switch (action.type) {
    case "ADD_DRAGON":
      // Message d'erreur si on essaie de rentrer du vide dans le tableau
      if (state.dragon === "") {
        return {
          ...state,
          message: "Vous avez oublié le nom de votre dragon !",
        };
      }

      return { ...state, elems };

      // Message d'erreur si on essaie de rentrer un nom de dragon qui existe déjà
      if (dragons.includes(dragon) === true) {
        return {
          ...state,
          message: "Le dragon {dragon} éxiste déjà",
        };
      }
      return {
        // Une fois les erreurs traitées, on insère le nouveau nom dans le tableau
        ...state,
        dragon: "",
        dragons: [...state.dragons, state.dragon],
        // Messaage qui indique que l'ajout a bien été fait
        message: " Votre dragon {dragon} a bien été ajouté ",
        // mise à jour du compteur de dragons
        count,
      };

    // case pour récupérer la valeur du nom du dragon
    case "DRAGON":
      return {
        ...state,
        dragon: action.dragon,
        message: "",
      };

    default:
      return state;
  }

  return state;
};

export default reducer;
