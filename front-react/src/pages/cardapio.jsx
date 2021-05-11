import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { PersistentDrawerLeft } from "../components/Drawer";
import ItensCardapio from "./itenscardapio";
import ListaItens from "../text_teste/itensMenu";

const HomePage = () => {
  return (
    // <DashboardLayout>
    <>
      <CssBaseline />
        <Container maxWidth="sm">
          <PersistentDrawerLeft />
          {/* Transformacao de um array recebido para o elemento ItensCardapio */}
          {ListaItens.map((item,index) =>(
            <ItensCardapio imagem={item.imagem} descricao={item.descricao} valor={item.valor} label={item.label} />
          ))}
        </Container>
    </>
  );
};

export default HomePage;