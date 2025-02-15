import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components";
import Detail from "./components/detail";

function App(){
    return (
        <div>
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/product/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
        </div>
    )
}

export default App;