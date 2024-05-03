import styled from "styled-components";
import { Span } from "../utils/Span";
import { colors } from "../assets/colors";
import { useState } from "react";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function ProductSelected({
  product,
  productsSelecteds,
  setProductsSelecteds,
  key,
}) {
  function deleteProductFromCart() {
    Confirm.show(
      "Confirma a remoção do produto",
      `Deseja remover o produto: ${product.name}`,
      "Sim",
      "Não",
      () => {
        const productsFilterSelecteds = productsSelecteds.filter(
          (products) => products.id !== product.id
        );
        setProductsSelecteds([...productsFilterSelecteds]);
        Notify.success("Produto removido com sucesso!", {
          ID: "removeProduct",
          timeout: 2000,
          showOnlyTheLastOne: true,
          position: "right-bottom",
        });
      },
      () => {
        return "";
      },
      {}
    );
  }

  const [value, setValue] = useState<any>(product.quantity);

  function decrement() {
    if (value - 1 !== 0) {
      const decrementeQuantityProduct = productsSelecteds.filter((products) => {
        if (products.id === product.id) {
          product.quantity = product.quantity - 1;
          return product;
        } else {
          return products;
        }
      });

      setProductsSelecteds([...decrementeQuantityProduct]);
      setValue(Number(value) - 1);
    }
  }
  function increment() {
    setValue(Number(value) + 1);
    const incrementeQuantityProduct = productsSelecteds.filter((products) => {
      if (products.id === product.id) {
        product.quantity = product.quantity + 1;
        return product;
      } else {
        return products;
      }
    });

    setProductsSelecteds([...incrementeQuantityProduct]);
  }

  return (
    <ProductInCart key={key}>
      <BoxDetailsProduct>
        <Image src={product.photo} />
        <BoxNameProduct>
          <Span $color="black">{product.name}</Span>
        </BoxNameProduct>
      </BoxDetailsProduct>

      <Quantity>
        <Span>Qtd:</Span>
        <BoxQuantity>
          <ButtonDecreases onClick={decrement}>-</ButtonDecreases>
          <InputQuantity>
            <Span>{value}</Span>
          </InputQuantity>

          <ButtonIncrease onClick={increment}>+</ButtonIncrease>
        </BoxQuantity>
      </Quantity>
      <Span $bold="bold" $color="black">
        R${product.price}
      </Span>

      <ButtonDeleteProduct
        onClick={() => {
          deleteProductFromCart();
        }}
      >
        <Span $color="white">X</Span>
      </ButtonDeleteProduct>
    </ProductInCart>
  );
}

const ProductInCart = styled.div`
  position: relative;
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  align-items: center;
  background: white;
  padding: 1.5em 1em;
  width: 22em;
  border-radius: 0.6em;
`;

const BoxDetailsProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
`;

const Image = styled.img`
  width: 3.5em;
`;

const BoxNameProduct = styled.div`
  width: 5em;
  word-wrap: break-word;
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.8em;
`;

const BoxQuantity = styled.div`
  display: flex;
  border-radius: 0.3em;
  border: 1px solid #bfbfbf;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
`;

const ButtonDecreases = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5em;
`;

const InputQuantity = styled.div`
  width: 2.5em;
  border: 1px solid #bfbfbf;
`;

const ButtonIncrease = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2em;
`;

const ButtonDeleteProduct = styled.div`
  position: absolute;
  top: -0.6em;
  right: -0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.black};
  border-radius: 50%;
  height: 2em;
  width: 2em;
  cursor: pointer;
`;
