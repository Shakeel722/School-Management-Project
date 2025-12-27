import {Routes , Route} from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";


function App() {


  return (
    <Routes>

      <Route path="/" element={ <AddSchool></AddSchool>} />
      <Route path="/schools" element= {<ShowSchools></ShowSchools>} />

    </Routes>

    
  );
}

export default App
