import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((setShowModal) => !showModal);
  };
  return (
    <Container>
      <Button onClick={openModal}>Add Item</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
`;

export default Home;
