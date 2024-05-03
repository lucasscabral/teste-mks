import styled from "styled-components";
import { RiShoppingBag3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { Span } from "../utils/Span";
import { colors } from "../assets/colors";
import { fontFamily } from "../assets/fonts";
import { Notify } from "notiflix";

export default function Product({
  dataProduct,
  productsSelecteds,
  setProductsSelecteds,
}) {
  function addPrductInCart() {
    if (!productsSelecteds.some((product) => product.id === dataProduct.id)) {
      setProductsSelecteds([
        ...productsSelecteds,
        { ...dataProduct, quantity: 1 },
      ]);

      Notify.success("Produto adicionado no carrinho!", {
        ID: "successAdd",
        timeout: 2000,
        showOnlyTheLastOne: true,
        position: "left-bottom",
      });
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <BoxProduct>
        <BoxImage>
          <Image alt="" src={dataProduct.photo} />
        </BoxImage>
        <PriceAndNameProduct>
          <Span>{dataProduct.name}</Span>
          <Price>
            <Span $bold="bold" $color="white">
              R${dataProduct.price}
            </Span>
          </Price>
        </PriceAndNameProduct>
        <Details>{dataProduct.description}</Details>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button onClick={addPrductInCart}>
            <RiShoppingBag3Line size={25} color="white" />
            <Span $bold="bold" $color="white">
              Comprar
            </Span>
          </Button>
        </motion.div>
      </BoxProduct>
    </motion.div>
  );
}

const BoxProduct = styled.div`
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15em;
  height: 100%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  padding: 1em;
  background: white;
  width: 12em;
  border-radius: 0.5em;
`;

const PriceAndNameProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  gap: 0.2em;
  word-wrap: break-word;
`;

const Price = styled.div`
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #373737;
  padding: 0 0.5em;
  border-radius: 0.5em;
`;

const Details = styled.div`
  padding: 1em 1em;
  font-family: ${fontFamily.regular};
  font-size: 0.75em;
  color: gray;
`;

const Button = styled.div`
  background-color: ${colors.blue};
  display: flex;
  border-radius: 0 0 0.5em 0.5em;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0.4em 0;
  cursor: pointer;
`;
