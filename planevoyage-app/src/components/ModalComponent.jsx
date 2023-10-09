import { Html } from "@react-three/drei";

import Modal from "react-modal";
import { customStyles } from "../utils/ModalStyle";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";

Modal.setAppElement("#modal");

export default function ModalComponent({
  modal,
  setModal,
  text,
  para,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
}) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#000000";
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <Html>
      <Modal
        isOpen={modal}
        shouldCloseOnEsc={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        portalClassName='modal'
        overlayClassName='overlay'
      >
        <div className='content'>
          <h1> {text} </h1>
          <p> {para} </p>
          <div className='grid'>
            <div className='grid-inner inner-1'>
              <span> Length Of year </span>
              <p> {lengthOfYear} </p>
              <p className='line'> </p>
            </div>
            <div className='grid-inner inner-2'>
              <span> Distance from Sun </span>
              <p> {distanceFromSun} Astronomical Units </p>
              <p className='line'> </p>
            </div>
            <div className='grid-inner inner-3'>
              <span> Moons </span>
              <p>
                {numberOfMoon} <WiMoonAltWaxingCrescent3 />
              </p>
              <p className='line'> </p>
            </div>
          </div>
        </div>
        <button className='modal-button' onClick={closeModal}>
          Close
        </button>
      </Modal>
    </Html>
  );
}
