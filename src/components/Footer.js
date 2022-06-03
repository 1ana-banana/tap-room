import React from "react";
import PropTypes from 'prop-types';

const footerStyles = {
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto"
}

function Footer({ onHoverDrunk }) {
  return (
    <footer>
      <div>
        <p
          style={footerStyles}
          onMouseEnter={() => onHoverDrunk(true)}
          onMouseLeave={() => onHoverDrunk(false)}
          className="mushroomman"
        >🍄🍄🍄</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onHoverDrunk: PropTypes.func
}

export default Footer;