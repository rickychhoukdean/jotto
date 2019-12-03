import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testutils";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitBox = findByTestAttr(wrapper, "submit-box");
      expect(submitBox.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitBox = findByTestAttr(wrapper, "submit-box");
      expect(submitBox.length).toBe(0);
    });
  });
});

// describe("update state", () => {});
describe("redux props", () => {
  test("has success piece of state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("guessword action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock
    };
    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.setState({ currentGuess: guessedWord });

    const submitButton = findByTestAttr(wrapper, "submit-box");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("calls `guessWord when button is clicked`", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test("calls `guessWord` with input value as arguement", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });
});
