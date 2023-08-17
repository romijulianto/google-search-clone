import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
