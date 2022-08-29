import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UncontrolledForm } from "./components/2- controlled vs uncontrolled components/uncontrolled components/UncontrolledForm";
import { ControlledForm } from "./components/2- controlled vs uncontrolled components/controlled components/0ControlledForm";
import { UncontrolledModal } from "./components/2- controlled vs uncontrolled components/uncontrolled components/UncontrolledModal";
import { ParentModal } from "./components/2- controlled vs uncontrolled components/controlled components/1ParentModal";
import { ParentUncontrolledOnboardingFlow } from "./components/2- controlled vs uncontrolled components/uncontrolled components/ParentUncontrolledOnboardingFlow";
import { ParentControlledOnboardingFlow } from "./components/2- controlled vs uncontrolled components/controlled components/2ParentControlledOnboardingFlow";
import { ParentSplitScreen } from "./components/1- layout components/split screens/ParentSplitScreen";
import { ParentSplitScreenUsingChildren } from "./components/1- layout components/split screens/using children/ParentSplitScreenUsingChildren";
import { ParentRegularList } from "./components/1- layout components/lists and lists itmes/people/0ParentRegularList";
import { Navigation } from "./components/Navigation";
import { ParentModal_ } from "./components/1- layout components/modals/ParentModal_";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/splitScreen">
            <ParentSplitScreen />
            <ParentSplitScreenUsingChildren />
          </Route>

          <Route path="/list">
            <ParentRegularList />
          </Route>

          <Route path="/modal">
            <ParentModal_/>
          </Route>

          <Route path="/uncontrolled&ControlledForm">
            <UncontrolledForm />
            <ControlledForm />
          </Route>

          <Route path="/uncontrolled&controlledModal">
            <UncontrolledModal>this is how it looks</UncontrolledModal>
            <ParentModal />
          </Route>

          <Route path="/uncontrolled&controlledOnboardingFlow">
            <ParentUncontrolledOnboardingFlow />
            <ParentControlledOnboardingFlow />
          </Route>

         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
