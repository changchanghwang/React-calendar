import React from 'react';
import styled from 'styled-components';

const GrayBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const PopUpWrap = styled.div`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  padding: 30px 40px;
  width: 520px;
  background-color: #fff;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 80%;
    min-width: auto;
  }
  @media (max-width: 575px) {
    padding: 20px;
  }
`;

function Modal(props: {}) {
  // prop destruction
  // lib, style hooks
  // state, ref hooks
  // formik
  // query hooks
  // calculated values
  // effects
  // handlers
}

export { Modal };
