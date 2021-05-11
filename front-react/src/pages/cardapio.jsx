import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { PersistentDrawerLeft } from "../components/Drawer";
import ItensCardapio from "./itenscardapio";

const HomePage = () => {
  return (
    // <DashboardLayout>
    <>
      <CssBaseline />
        <Container maxWidth="sm">
          <PersistentDrawerLeft />
          {/* aqui teria como fazer o envio de informacos usando o .map pro ItensCardapio?
          como por exemplo o nome do produto, descricao, foto, e valor */}
          <ItensCardapio />

          <ItensCardapio />
          <ItensCardapio />
          <ItensCardapio />
        </Container>
    </>
  );
};

export default HomePage;