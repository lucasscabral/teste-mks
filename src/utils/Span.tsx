import styled from "styled-components";
import { fontFamily } from "../assets/fonts";

export const Span = styled.span<{
  $bold?: string;
  $color?: string;
}>`
  font-family: ${fontFamily.regular};
  font-weight: ${(props) => props.$bold || ""};
  color: ${(props) => props.$color || ""};
`;
