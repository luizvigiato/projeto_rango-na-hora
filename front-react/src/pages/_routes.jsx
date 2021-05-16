import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollTop'

import Menu from "./cardapio";
import CadastroCliente from './CadastroCliente';

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
        <Route exact path='/cadastro' component={CadastroCliente}/>
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export default Routes;