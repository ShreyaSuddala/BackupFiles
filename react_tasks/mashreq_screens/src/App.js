import './App.css';
import ButtonAppBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CasesGraphs from './components/cases';
import SimplePaper from './components/Alerts';
import PendingCases from './components/pendingCases';
import BasicTable from './components/casesTable';

function App() {
  return (
    <div className="App">
          <ButtonAppBar/>
          <Dashboard/>
          <CasesGraphs/> 
          <SimplePaper/>
          <PendingCases/>
          <BasicTable/>   
    </div>
  );
}

export default App;
