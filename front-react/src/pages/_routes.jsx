import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollTop'

import Menu from "./cardapio";

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
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export default Routes;