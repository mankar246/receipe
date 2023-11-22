import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const [receipe, setReceipe] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [direction, setDirection] = useState("");

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
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <div className="three columns">
                <label for="nameInput">Receipe</label>
                <input
                  className="u-full-width"
                  type="text"
                  id="receipe"
                  onChange={handleReceipe}
                  value={receipe}
                />
                <label for="ingredientInput">Ingredient</label>
                <input
                  className="u-full-width"
                  type="text"
                  id="ingredient"
                  onChange={handleIngre}
                  value={ingredient}
                />
                <label for="ingredientInput">Direction</label>
                <input
                  className="u-full-width"
                  type="text"
                  id="direction"
                  onChange={handleDire}
                  value={direction}
                />
                <button className="button-primary" onClick={addReceipe}>
                  Add Receipe
                </button>
              </div>
            </ModalContent>
            <CloseModalButton
              aria-lable="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
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
  // justify-content: center;
  // align-items: center;
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
export default Modal;
