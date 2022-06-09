import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { ListProvider } from "./context/ListContext";
import Active from "./pages/Active";
import All from "./pages/All";
import Completed from "./pages/Completed";

const App = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
    <BrowserRouter>
      <ListProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/active" element={<Active />} />
          </Route>
        </Routes>
      </ListProvider>
    </BrowserRouter>
  </div>
  );
};

export default App;
