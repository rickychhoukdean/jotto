import React from "react";
import propTypes from 'prop-types';

function Congrats(props) {
  if (props.success) {
    return(
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congrats you guessed the word</span>
    </div>);
  } else {
    return <div data-test="component-congrats"></div>;
  }
}

Congrats.propTypes = {
    success: propTypes.bool.isRequired,

}

export default Congrats;
