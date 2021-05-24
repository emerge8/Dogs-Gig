import { useCallback, useEffect, useState } from "react";

import api from '../../../services/api';
import LoaderContent from "../../../LoaderContent";

import { Container } from './style';

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

  const handleSortImage: any = useCallback(() => {
    setIsLoad(true)
    console.log(photo);
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }, [photo]);

  return (
    <Container>
      <div className="content">
       <div className="title-text">
         <h1>Hello Gama</h1>
         </div> 
        <div className="sub-title">  <h4>Veja estas imagens</h4>  </div>
        <button onClick={handleSortImage}> Clique aqui para ver mais pets</button>
      </div>
      <div className="image-setings"> {isLoad ? (<LoaderContent />) : (<img src={photo} alt="dog" />)} </div>
    </Container>
  );
}

export default App;
