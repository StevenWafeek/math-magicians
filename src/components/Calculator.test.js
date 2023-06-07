import React from "react";
import Calculator from "./Calculator";
import { Renderer } from "react-dom";

test('Calculator snapshot', () => {
    const calculator = Renderer.create(
        <Calculator />
    );
    let tree = calculator.toJSON();
    expect(tree).toMatchSnapshot();
});