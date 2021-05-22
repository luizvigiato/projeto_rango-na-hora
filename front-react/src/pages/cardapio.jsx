import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { PersistentDrawerLeft } from "../components/Drawer";
import ItensCardapio from "./itenscardapio";
import ListaItens from "../text_teste/itensMenu";

const HomePage = () => {

  const [itens, setItens] = useState(ListaItens);


  return (
    // <DashboardLayout>
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <PersistentDrawerLeft />
        {/* Transformacao de um array recebido para o elemento ItensCardapio */}
        {itens.map((item, index) => (
          <ItensCardapio
            item={item}
            onChange={setItens}
            key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default HomePage;