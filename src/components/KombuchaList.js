import React from "react";
import PropTypes from 'prop-types';

import KombuchaCard from "./KombuchaCard";

function KombuchaList({
  kombuchas,
  decrementPints,
  onViewChange,
  onSetEditKombucha,
  onDeleteKombucha
}) {
  return (
    <>
      {kombuchas.map(kombucha =>
        <KombuchaCard
          kombucha={kombucha}
          decrementPints={decrementPints}
          onViewChange={onViewChange}
          onSetEditKombucha={onSetEditKombucha}
          onDeleteKombucha={onDeleteKombucha}
          key={kombucha.id}
        />
      )}
      <button
        type="button"
        onClick={() => onViewChange("new")}
      >
        Add a kombucha kind!
      </button>
    </>
  )
}

KombuchaList.propTypes = {
  kombuchas: PropTypes.arrayOf(PropTypes.object),
  decrementPints: PropTypes.func,
  onViewChange: PropTypes.func,
  onSetEditKombucha: PropTypes.func,
  onDeleteKombucha: PropTypes.func
}

export default KombuchaList