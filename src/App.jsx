import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Search from "./pages/search/index";
import { NextUIProvider } from "@nextui-org/react";
import { AppContext } from "./services/api/ContextApi";

function App() {
  return (
    <AppContext>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/:query/:startIndex" exact element={<Search />} />
            </Routes>
          </BrowserRouter>
        </main>
      </NextUIProvider>
    </AppContext>
  );
}

export default App;
