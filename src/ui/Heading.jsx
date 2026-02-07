import styled, { css } from "styled-components";

/* 
const test = css`
  text-align: center;
`;
 */

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      text-align: center;
    `}

    ${(props) =>
    props.type === "h3" &&
    css`
      text-align: center;
      font-size: 3rem;
    `}
`;

export default Heading;
