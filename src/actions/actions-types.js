// 3ÈME PARTIE
import { CHOICE } from "../constants/actions";

// mettez des parenthèses pour forcer le return syntaxe courte des arrow functions
// {type: CHOICE, payload} <=> {type: CHOICE, payload:payload }
export const setChoice = (payload) => ({ type: CHOICE, payload });
