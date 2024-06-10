import {MyPrimerSamira} from './components/miPrimerComponente/Mi1ercomp'
import { Estado } from './components/estado/Estado';


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
    </>
  );
}

export default App
