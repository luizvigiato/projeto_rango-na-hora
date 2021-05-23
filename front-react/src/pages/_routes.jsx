import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollTop'

import Menu from "./Cardapio";
import CadastroCliente from './CadastroCliente';
import Token from "./Token";
import Logout from "./Logout";
import CadastroFuncionario from "./CadastroFuncionario";
import CadastroEmpresa from "./CadastroEmpresa";


// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/">
//           <Menu />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default Routes;

const Routes = () => (  

  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route exact path='/token' component={Token}/>
        <Route exact path='/logout' component={Logout}/>
        <Route exact path='/cadastro' component={CadastroCliente}/>
        <Route exact path='/funcionarios' component={CadastroFuncionario} />
        <Route exact path="/cadEmpresa" component={CadastroEmpresa} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export default Routes;