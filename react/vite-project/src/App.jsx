import {MyPrimerSamira} from './components/miPrimerComponente/Mi1ercomp'
import { Estado } from './components/estado/Estado'
import { GetPost } from './components/GetPost/GetPost'
import {Personajes} from './components/personajesRM/Personajes'

const Myfunction = () => {
  return<>hola </>;
}
//props
function App() {

  return (
    <>
       <Myfunction/>
       <MyPrimerSamira name={'Shoto'} last_name={'Todoroki'}/>
       <Estado/>
       <GetPost/>
       <Personajes/>
    </>
  );
}

export default App
