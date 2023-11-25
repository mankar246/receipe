import React, { useState } from "react";

import styled from "styled-components";
import ModalPopup from "../../components/Modal";
import "./receipe.css";
import { MdAdd } from "react-icons/md";

export function Receipe() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((setShowModal) => !showModal);
  };
  return (
    <div className="example" spacing={1} justify="center">
      <div class="some-page-wrapper">
        <div class="row">
          <div class="single-column">
            <div class="orange-column">
              <label>Receipe List</label>
              <AddButton onClick={openModal}>Add Item</AddButton>
            </div>
            <hr class="solid"></hr>
            <div class="item-list">
              <label>Chicken Curry</label>
            </div>
            <div class="item-list">
              <label>Vegetabl Curry</label>
            </div>
          </div>

          <div class="double-column">
            <div class="blue-column">Some Text in Row2, Column Three</div>
          </div>
        </div>
      </div>
      <ModalPopup showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Button = styled.button`
  width: 100px;
`;

const Content = styled.div`
  margin-bottom: 10uv;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const AddButton = styled(MdAdd)`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 1px;
  position: center;
`;

const Product = styled.div`
  margin-bottom: 2uv;
  max-width: 500px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-aligh: center;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

export default Receipe;
