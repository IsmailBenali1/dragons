// Hook qui permet d'utiliser les state pour lire (afficher)
import { useSelector } from "react-redux";
import Dragon from "./components/Dragon";
// 4ÈME PARTIE RÉCUP DES DATAS POUR AFFICHAGE

const App = () => {
  // lecture du store
  const { dragons } = useSelector((state) => state);

  // Array.from sur un Map permet de le transformer en tableau de tableau clé/val
  return (
    <>
      <div className="App">
        {Array.from(dragons).map((d, i) => {
          const [id, dragon] = d;

          return <Dragon key={i} id={id} {...dragon} />;
        })}
      </div>
    </>
  );
};

export default App;
