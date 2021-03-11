import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Views//Login/Login"
import Cadastro1 from "./Views//Cadastro/Cadastro1"
import Cadastro2 from "./Views//Cadastro/Cadastro2"
import ListaPets from "./Views//ListaPets/ListaPets"
import DescPet from "./Views//InfoPet/DescPet"
import CadPet1 from "./Views//CadastroPet/CadPet1"
import CadPet2 from "./Views//CadastroPet/CadPet2"

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}><Redirect to="/Login"></Redirect></Route>
            <Route exact path="/Login" component={Login}></Route>
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
  