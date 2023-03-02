import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Imc } from "./pages/IMC/Imc";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Main } from "./components/layout/styles";
import { HomeFat } from "./pages/Faturamento/HomeFat";
import { Peso } from "./pages/Faturamento/Peso";
import { Seta } from "./pages/Faturamento/Seta";
import { AccuLoad } from './components/AccuLoad/components/AccuLoad';
import { StyleGlobal } from './components/AccuLoad/styles/global.ts';

export function App() {
  return (
    <Router>
      <Navbar />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/faturamento">
            <HomeFat />
          </Route>
          <Route path="/peso">
            <Peso />
          </Route>
          <Route path="/seta">
            <Seta />
          </Route>
          <Route path="/imc">
            <Imc />
          </Route>
          <Route path="/accuload">
            <AccuLoad />
            <StyleGlobal />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}