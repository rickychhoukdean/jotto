import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import {findByTestAttr} from "../test/testutils"
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={})  =>{
    return shallow(<Congrats{...props}/>)
}

test('renders without error',()=>{

})

test('renders no text when success message is false',()=>{

})

test('renders nonempty message congrats message when success prop is true',()=>{

})
