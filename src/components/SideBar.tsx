import { motion } from "framer-motion";
import { Span } from "../utils/Span";
import styled from "styled-components";
import { colors } from "../assets/colors";
import ProductSelected from "./ProductSelected";
import { TbShoppingCartX } from "react-icons/tb";
import Notiflix, { Notify } from "notiflix";

export default function SideBar({
  isOpenSideBar,
  cycleIsOpenSideBar,
  productsSelecteds,
  setProductsSelecteds,
}) {
  let calculate = productsSelecteds.reduce((acumulador, numero) => {
    return acumulador + Number(numero.price) * numero.quantity;
  }, 0);

  function finishPurchase() {
    Notiflix.Confirm.show(
      "Finalizar Compra",
      "Deseja finalizar a compra?",
      "Sim",
      "Não",
      () => {
        setProductsSelecteds([]);
        Notify.success("Obrigado por comprar com a gente!");
      },
      () => {
        return "";
      },
      {}
    );
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpenSideBar ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        zIndex: 50,
        top: 0,
        right: 0,
        width: "25em",
        height: "100%",
        background: "#0F52BA",
        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
      <ContainerSideBar>
        <HeaderSideBar>
          <Span $bold="bold" $color="white">
            Carrinho de Compras
          </Span>

          <ButtonClosed onClick={() => cycleIsOpenSideBar()}>
            <Span $color="white">X</Span>
          </ButtonClosed>
        </HeaderSideBar>
        {productsSelecteds.length > 0 ? (
          <>
            <ListProductsInCart>
              {productsSelecteds.map((product) => (
                <ProductSelected
                  product={product}
                  productsSelecteds={productsSelecteds}
                  setProductsSelecteds={setProductsSelecteds}
                  key={product.id}
                />
              ))}
            </ListProductsInCart>
            <FooterSideBar>
              <BoxTotalPrice>
                <Span $bold="bold" $color="white">
                  Total:
                </Span>
                <Span $bold="bold" $color="white">
                  R${calculate}
                </Span>
              </BoxTotalPrice>
              <CheckoutButton onClick={finishPurchase}>
                <Span $bold="bold" $color="white">
                  Finalizar Compra
                </Span>
              </CheckoutButton>
            </FooterSideBar>
          </>
        ) : (
          <BoxCartEmpty>
            <TbShoppingCartX color="white" size={35} />
            <Span $bold="bold" $color="white">
              Carrinho Vazio!
            </Span>
          </BoxCartEmpty>
        )}
      </ContainerSideBar>
    </motion.div>
  );
}

const ContainerSideBar = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderSideBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
`;

const ButtonClosed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.black};
  border-radius: 50%;
  height: 2em;
  width: 2em;
  cursor: pointer;
`;

const ListProductsInCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const BoxCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FooterSideBar = styled.div`
  width: 100%;
`;
const BoxTotalPrice = styled.div`
  padding: 1.5em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckoutButton = styled.div`
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8em 0;
  cursor: pointer;
`;
