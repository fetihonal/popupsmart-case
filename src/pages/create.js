import React from "react";
import Layout from "../components/layout/index";
import SideBar from "../components/sidebar";
import ModalContainer from "../components/modal-container";
function Home() {
  return (
    <Layout>
      <SideBar />
      <ModalContainer />
    </Layout>
  );
}

export default Home;
