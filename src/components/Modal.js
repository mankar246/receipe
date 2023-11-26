import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./Modal.css";
import { Modal, Button } from "react-bootstrap";

import { recepieAdd } from "../features/receipe/receipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ModalPopup = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleIngre = (e) => setIngredient(e.target.value);
  const handleDire = (e) => setDirection(e.target.value);

  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const receipeId = useSelector((state) => state.receipes.length);

  const addReceipe = () => {
    console.log("submit button click");
    if (title && ingredient) {
      dispatch(
        recepieAdd({
          id: receipeId + 1,
          title,
          ingredient,
          direction,
        })
      );
      setError(null);
      Navigate("/receipe");
    } else {
      setError("Fill in the blanks");
    }

    setTitle("");
    setIngredient("");
    setDirection("");
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        // <Background onClick={closeModal} ref={modalRef}>
        <Modal show={showModal}>
          <Modal.Header
            closeButton
            onClick={() => setShowModal((prev) => !prev)}
          >
            <Modal.Title>Add Receipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="columns">
                <label for="nameInput">Receipe</label>
                <input
                  className="u-full-width"
                  type="text"
                  placeholder="chicken curry"
                  id="title"
                  onChange={handleTitle}
                  value={title}
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
                  id="direction"
                  onChange={handleDire}
                  value={direction}
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
            <Button variant="dark" onClick={addReceipe}>
              Submit
            </Button>
          </Modal.Footer>
          {/* <CloseModalButton
              aria-lable="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            /> */}
        </Modal>
      ) : // </Background>
      null}
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
