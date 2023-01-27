// Hook qui permet d'utiliser les state pour lire (afficher)
import { useSelector } from "react-redux";
import Question from "./components/Question";
// 4ÈME PARTIE RÉCUP DES DATAS POUR AFFICHAGE

const App = () => {
  // lecture du store
  const { questions, responses } = useSelector((state) => state);

  // Array.from sur un Map permet de le transformer en tableau de tableau clé/val
  return (
    <>
      <div className="App">
        {Array.from(questions).map((q, i) => {
          const [id, question] = q;

          return <Question key={i} id={id} {...question} />;
        })}
      </div>
      {responses.length > 0 && (
        <ul>
          {responses.map((r, i) => (
            <li key={i}>
              QUESTION {r.id} -
              {r.response ? "Bonne réponse" : "Mauvaise réponse"}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
