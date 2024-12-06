import Header from "./components/header";
//import ListarTarefa from "./pages/tarefa/ListarTarefa";
//import Login from "./pages/Login";
import AnchorTemporaryDrawer from "./pages/teste/drawer"
import BasicTable from "./pages/tarefa/ListarTarefas_2"

function App() {
  return (
    <div className="App">
      <Header />
      <AnchorTemporaryDrawer />
      <BasicTable/>
    </div>
  );
}

export default App;
