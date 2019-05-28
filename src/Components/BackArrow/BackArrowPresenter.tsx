import React from "react";
// import { Link } from "react-router-dom";
import styled from "../../typed-components";

const Container = styled.div`
  transform: scale(0.8);
  cursor: pointer;
`;

interface IProps {
  backTo: any;
  className?: string;
}

const BackArrow: React.SFC<IProps> = ({ className }) => (
  <Container className={className} onClick={goBack}>
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
    </svg>
  </Container>
);

function goBack() {
  window.history.back();
}

export default BackArrow;
