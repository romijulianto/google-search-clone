import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Search from "./pages/search/index";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="search" exact element={<Search />} />
          </Routes>
        </BrowserRouter>
      </main>
    </NextUIProvider>
  );
}

export default App;
