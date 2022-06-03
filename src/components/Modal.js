import React from "react";
import PropTypes from 'prop-types';

function Modal({ kombucha, onDeleteKombucha, onShowModal }) {
  const handleDeleteKombucha = (bekombuchaer, onDeleteKombucha, onShowModal) => {
    onDeleteKombucha(kombucha);
    onShowModal(false);
  }

  return (
    <>
    <div className="modal_background">
      <div className="modal">
        <div className="modal_content">
          <p>Are you sure you want to delete {kombucha.name}?</p>
          <button
            type="button"
            onClick={() => handleDeleteKombucha(kombucha, onDeleteKombucha, onShowModal)}
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {onShowModal(false)}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

Modal.propTypes = {
  kombucha: PropTypes.object,
  onDeleteKombucha: PropTypes.func,
  onShowModal: PropTypes.func
}

export default Modal;