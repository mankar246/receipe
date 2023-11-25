import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./Modal.css";

import { Modal, Button } from "react-bootstrap";

export const ModalPopup = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!false);
  };

  const [receipe, setReceipe] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState(null);

  const handleReceipe = (e) => setReceipe(e.target.value);
  const handleIngre = (e) => setIngredient(e.target.value);
  const handleDire = (e) => setDirection(e.target.value);

  const addReceipe = () => {
    dispatch(
      addReceipe({
        // id: receipeId,
        receipe,
        ingredient,
        direction,
      })
    );
    navigate("/receipe");
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <Modal show={showModal}>
            <Modal.Header
              closeButton
              onClick={() => setShowModal((prev) => !prev)}
            >
              <Modal.Title>React Modal Popover Example</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="columns">
                  <label for="nameInput">Receipe</label>
                  <input
                    className="u-full-width"
                    type="text"
                    placeholder="chicken curry"
                    id="recepie"
                    onChange={handleReceipe}
                    value={receipe}
                  />
                  <label for="ingredient">Ingredient</label>
                  <input
                    className="u-full-width"
                    type="text"
                    placeholder="chicken"
                    id="ingredient"
                    onChange={handleIngre}
                    value={ingredient}
                  />
                  <label for="description">Description</label>
                  <input
                    className="u-full-width"
                    type="email"
                    placeholder="butter"
                    id="ingredient"
                    onChange={handleIngre}
                    value={ingredient}
                  />
                  {error && error}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => setShowModal((prev) => !prev)}
              >
                Close
              </Button>
              <Button variant="dark" onClick={initModal}>
                Store
              </Button>
            </Modal.Footer>
            {/* <CloseModalButton
              aria-lable="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            /> */}
          </Modal>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fe 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0px;
  z-index: 10;
`;
export default ModalPopup;
