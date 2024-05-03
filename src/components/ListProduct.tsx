import styled from "styled-components";
import Product from "./Product";
import type { DataProduct } from "../types/product.type";
import { useQuery } from "react-query";
import api from "../api/api";
import { Loading } from "notiflix";

export default function ListProduct({
  productsSelecteds,
  setProductsSelecteds,
}) {
  const { data, isLoading, isSuccess } = useQuery("produtos", () => {
    return api
      .get("/products?page=1&rows=6&sortBy=id&orderBy=DESC")
      .then((res) => res.data);
  });

  if (isLoading) {
    return Loading.standard("Carregando...");
  } else if (isSuccess) Loading.remove();
  return (
    <Container>
      <ContainerList>
        {data?.products.map((product: DataProduct, id: number) => (
          <Product
            dataProduct={product}
            key={id}
            productsSelecteds={productsSelecteds}
            setProductsSelecteds={setProductsSelecteds}
          />
        ))}
      </ContainerList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  width: 65em;
`;
