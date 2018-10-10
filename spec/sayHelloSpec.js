import React from "react";
import TestUtils from "react-dom/test-utils";
import SayHello from "../src/scripts/sayHello.js";

describe('Greet',function(){
    it("renders ithout a problem",function(){
        const sayhello =
        TestUtils.renderIntoDocument(<SayHello/>);
            expect(sayhello).toEqual(jasmine.anything());
    });
});
