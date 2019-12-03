import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = { currentGuess: null }

    // bind this for submitGuessedWord
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if(guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' })
    }
  }
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={event => this.state({ currentGuess: event.target.value })}
        ></input>
        <button
          data-test="submit-box"
          type="submit"
          onClick={event => {
            this.submitGuessedWord(event);
          }}
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};


export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
