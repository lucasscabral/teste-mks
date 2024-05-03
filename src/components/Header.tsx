import styled from "styled-components";
import { colors } from "../assets/colors";
import { fontFamily } from "../assets/fonts";
import { HiShoppingCart } from "react-icons/hi";

export default function Header({ cycleIsOpenSideBar, productsSelecteds }) {
  return (
    <HeaderHome>
      <TitlesHeader>
        <Logo>MKS</Logo>
        <SLogan>Sistemas</SLogan>
      </TitlesHeader>
      <BoxCard onClick={() => cycleIsOpenSideBar()}>
        <HiShoppingCart size={28} />
        <Span>
          {productsSelecteds.length > 0 ? productsSelecteds.length : 0}
        </Span>
      </BoxCard>
    </HeaderHome>
  );
}

const HeaderHome = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${colors.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
`;

const TitlesHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-family: ${fontFamily.regular};
  font-weight: 600;
  size: "20px";
  line-height: "19px";
  color: white;
`;

const SLogan = styled.h2`
  font-family: ${fontFamily.regular};
  font-weight: 150;
  font-size: 1em;
  margin-left: 0.5em;
  color: white;
`;

const BoxCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 6em;
  height: 3em;
  border-radius: 0.6em;
  padding-right: 0.3em;
  cursor: pointer;
`;

const Span = styled.span`
  font-family: ${fontFamily.regular};
  font-weight: bold;
  font-size: 1em;
  margin-left: 0.5em;
  color: black;
`;
