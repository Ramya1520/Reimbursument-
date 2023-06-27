import "./App.css";
import Reimbursument_page from "./Component/Reimbursument_page";
import { Routes, Route } from "react-router-dom";
import View_Requests from "./Component/View_Request";
import View_Request_Details from "./Component/View_Request_Details";
import MyContextProvider from "./Component/Context";
import Requests from "./Component/Requests";
function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Routes>
          <Route path="" element={<Reimbursument_page />} />
          <Route path="/Requests" element={<Requests />} />
          <Route
            path="/View_Request_Details"
            element={<View_Request_Details />}
          />
        </Routes>
      </MyContextProvider>
    </div>
  );
}

export default App;
