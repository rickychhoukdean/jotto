import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testutils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are not words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
  });

  test("should render without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("should render instructions when a word is guessed", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().lenghth).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});