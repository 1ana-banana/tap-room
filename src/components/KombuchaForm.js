import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function KombuchaForm({ kombucha, onSubmitFunc, onViewChange }) {
  const editKombucha = !(typeof kombucha === 'undefined' || kombucha === null);
  const buttonText = (editKombucha) ? "EDIT" : "CREATE";

  const handleSubmit = (event) => {
    event.preventDefault();

    const oldKombucha = (editKombucha) ? {...kombucha} : {};

    const formKombucha = {
      ...oldKombucha,
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      pints: (editKombucha) ? oldKombucha.pints : 124,
      id: (editKombucha) ? oldKombucha.id : uuidv4()
    }

    onSubmitFunc(formKombucha);
    onViewChange("home");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={(editKombucha) ? kombucha.name : ''}
          required
        />
        <label htmlFor="brand">Brand: </label>
        <input
          type="text"
          id="brand"
          name="brand"
          defaultValue={(editKombucha) ? kombucha.brand : ''}
          required
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          name="price"
          min="1"
          max="100"
          step="1"
          defaultValue={(editKombucha) ? kombucha.price : ""}
          required
        />
        {  }
        <label htmlFor="alcoholContent">ABV: </label>
        <input
          type="number"
          id="alcoholContent"
          name="alcoholContent"
          min="0.0"
          max="99.9"
          step="0.1"
          defaultValue={(editKombucha) ? kombucha.alcoholContent : ""}
          required
        />
        <button>{buttonText}</button>
        <button
          type="button"
          onClick={() => onViewChange("home")}
        >
          Cancel
        </button>
      </form>
    </>
  )
}

KombuchaForm.propTypes = {
  kombuchas: PropTypes.arrayOf(PropTypes.object),
  onViewChange: PropTypes.func,
  onSubmitFunc: PropTypes.func
}

export default KombuchaForm;