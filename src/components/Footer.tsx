import styled from "styled-components";
import { Span } from "../utils/Span";
import { colors } from "../assets/colors";

export default function Footer() {
  return (
    <ContainerFooter>
      <Span>MKS sistemas © Todos os direitos reservados</Span>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.gray[200]};
  width: 100%;
  height: 2em;
`;
