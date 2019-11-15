import React from "react";
import PropTypes from 'prop-types';

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
export default Congrats;
