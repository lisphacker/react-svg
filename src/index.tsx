import * as React from "react";
import * as ReactDOM from "react-dom";
import { Quilt } from "./components/Quilt";

const globalProps: IGlobalProps = {
    blockSize: 1,
    dpi: 100,
};

ReactDOM.render(
    <Quilt numXBlocks={5} numYBlocks={5} globalProps={globalProps}/>,
    document.getElementById("appRoot"),
);
