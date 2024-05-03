import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListProduct from "../components/ListProduct";
import SideBar from "../components/SideBar";
import { useCycle } from "framer-motion";

export default function Home() {
  const [isOpenSideBar, cycleIsOpenSideBar] = useCycle(false, true);
  const [productsSelecteds, setProductsSelecteds] = useState([]);

  return (
    <>
      <Header
        isOpenSideBar={isOpenSideBar}
        cycleIsOpenSideBar={cycleIsOpenSideBar}
        productsSelecteds={productsSelecteds}
      />
      <ListProduct
        productsSelecteds={productsSelecteds}
        setProductsSelecteds={setProductsSelecteds}
      />
      <SideBar
        isOpenSideBar={isOpenSideBar}
        cycleIsOpenSideBar={cycleIsOpenSideBar}
        productsSelecteds={productsSelecteds}
        setProductsSelecteds={setProductsSelecteds}
      />
      <Footer />
    </>
  );
}
