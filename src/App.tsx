
import './App.css';
import { UncontrolledForm } from './components/controlled vs uncontrolled components/uncontrolled components/UncontrolledForm';
import { ControlledForm } from './components/controlled vs uncontrolled components/controlled components/0ControlledForm';
import { UncontrolledModal } from './components/controlled vs uncontrolled components/uncontrolled components/UncontrolledModal';
import { ParentModal } from './components/controlled vs uncontrolled components/controlled components/1ParentModal';
import { ParentUncontrolledOnboardingFlow } from './components/controlled vs uncontrolled components/uncontrolled components/ParentUncontrolledOnboardingFlow';
import { ParentControlledOnboardingFlow } from './components/controlled vs uncontrolled components/controlled components/2ParentControlledOnboardingFlow';


function App() {
  
  return (
    <div className="App">
      <UncontrolledForm/>
      <ControlledForm/>

      <UncontrolledModal>this is how it looks</UncontrolledModal>
      <ParentModal/>

      <ParentUncontrolledOnboardingFlow/>
      <ParentControlledOnboardingFlow/>
    </div>
  );
}

export default App;
