import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { PersistentDrawerLeft } from "../components/Drawer";
import ItensCardapio from "./itenscardapio";
// import {DashboardLayout} from '../components/Layout';

const HomePage = () => {
  return (
    // <DashboardLayout>
    <>
      <CssBaseline />
        <Container maxWidth="sm">
          <PersistentDrawerLeft />
          <ItensCardapio />

          <ItensCardapio />
          <ItensCardapio />
          <ItensCardapio />
        </Container>
    </>
  );
};

export default HomePage;