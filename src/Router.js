import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Views/Login"
import Cadastro1 from "./Views/Cadastro1"
import Cadastro2 from "./Views/Cadastro2"
import ListaPets from "./Views/ListaPets"
import DescPet from "./Views/DescPet"
import CadPet1 from "./Views/CadPet1"
import CadPet2 from "./Views/CadPet2"

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/Cadastro1" component={Cadastro1}></Route>
            <Route exact path="/Cadastro2" component={Cadastro2}></Route>
            <Route exact path="/ListaPets" component={ListaPets}></Route>
            <Route exact path="/Descricao-pet" component={DescPet}></Route>
            <Route exact path="/Cadastro-Pet1" component={CadPet1}></Route>
            <Route exact path="/Cadastro-Pet2" component={CadPet2}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  