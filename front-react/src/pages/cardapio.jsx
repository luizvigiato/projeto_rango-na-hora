import React from "react";

import { PersistentDrawerLeft } from "../components/Drawer";
import ItensCardapio from "./itenscardapio";
// import {DashboardLayout} from '../components/Layout';

const HomePage = () => {
  return (
    // <DashboardLayout>
    <>
      <PersistentDrawerLeft />
      <ItensCardapio />
    </>
  );
};

export default HomePage;