import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Modal from './Modal';

function KombuchaDetail({
  kombucha,
  decrementPints,
  onViewChange,
  onSetEditKombucha,
  onDeleteKombucha
}) {
  const [modalState, setModalState] = React.useState(false);
  const pullPint = (kombucha.pints > 0) ?
    <button
      type="button"
      onClick={() => decrementPints(kombucha)}
    >
      Give it a pull!
    </button>
    :
    <button
      type="button"
      disabled
    >
      I think you've had too many...
    </button>;

  return (
    <>
      <section>
        <ul>
          <li><b>NAME: </b>{kombucha.name}</li>
          <li><b>BRAND: </b>{kombucha.brand}</li>
          <li style={{color: "#FF851B"}}><b>PRICE: </b>{kombucha.price}</li>
          <li><b>ABV: </b>{kombucha.alcoholContent}</li>
          <li><b>PINTS IN KEG: </b>{kombucha.pints}</li>
        </ul>
        {pullPint}
        <button
          type="button"
          onClick={() => {
            onSetEditKombucha(kombucha);
            onViewChange("edit")
          }}
        >
          Edit
        </button>
        <button
          type="button"
          style={{backgroundColor: "red"}}
          onClick={() => setModalState(!modalState)}
        >
          DELETE
        </button>
      </section>
      {modalState ?
        <Modal
          kombucha={kombucha}
          onDeleteKombucha={onDeleteKombucha}
          onShowModal={setModalState}
        /> :
        <></>}
    </>
  )
}

function KombuchaCard({
  kombucha,
  decrementPints,
  onViewChange,
  onSetEditKombucha,
  onDeleteKombucha
}) {
  const [isActive, setIsActive] = useState(false);
  let pintText = <></>;

  if (kombucha.pints <= 10 && kombucha.pints > 0) {
    pintText = <span style={{color: "blue"}}> (Almost Out!)</span>;
  } else if (kombucha.pints === 0) {
    pintText = <span style={{color: "red"}}> (OUT)</span>;
  }

  return (
    <>
      <fieldset>
      <legend
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? <>+ </> : <>🍻 </>}
        {kombucha.name}
        {pintText}
      </legend>
      {
        isActive ? 
          (<KombuchaDetail
              kombucha={kombucha}
              decrementPints={decrementPints}
              onViewChange={onViewChange}
              onSetEditKombucha={onSetEditKombucha}
              onDeleteKombucha={onDeleteKombucha}
            />) :
          (<></>)
      }
      </fieldset>
    </>
  );
};

KombuchaDetail.propTypes = {
  kombuchas: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditKombucha: PropTypes.func,
  onDeleteKombucha: PropTypes.func
}

KombuchaCard.propTypes = {
  kombuchas: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditKombucha: PropTypes.func,
  onDeleteKombucha: PropTypes.func
}

export default KombuchaCard;