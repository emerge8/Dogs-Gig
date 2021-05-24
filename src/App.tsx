import { useEffect, useState } from "react";

import api from './services/api';
import LoaderContent from "./LoaderContent";

const App: React.FC = () => {
  const [photo, setPhoto] = useState<string>('');
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    setIsLoad(true)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false)
      }
    )
  }, [])


  function handleSortImage(){
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }

  return (
    <div>

      <div>
        <h1>Hello Gama</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={() => handleSortImage() }> Clique aqui</button>
      </div>
      
      {isLoad && (<LoaderContent />)}
      <img src={photo} alt="dog" />
    </div>

  );
}

export default App;
