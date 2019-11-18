import * as React from "react";
import { Block } from "./Block";

export interface IQuiltProps {
    numXBlocks: number;
    numYBlocks: number;
    globalProps: IGlobalProps;
}

export class Quilt extends React.Component<IQuiltProps> {
    public render() {
        const width = this.props.numXBlocks * this.props.globalProps.blockSize * this.props.globalProps.dpi;
        const height = this.props.numXBlocks * this.props.globalProps.blockSize * this.props.globalProps.dpi;
        const blockSize = this.props.globalProps.blockSize * this.props.globalProps.dpi;

        const blocks: JSX.Element[] = [];

        for (let y = 0; y < this.props.numYBlocks; y++) {
            for (let x = 0; x < this.props.numXBlocks; x++) {
                blocks.push(<Block y={y} x={x} globalProps={this.props.globalProps}/>);
            }
        }

        // 
        // <!--onClick={() => alert("div")}>
        return (
        <div>
            <svg width={width} height={height}>
                <g>{blocks}</g>
                <defs>
                    <pattern id="pat1" x={0} y = {0}
                             width={blockSize}
                             height={blockSize}
                             patternUnits="userSpaceOnUse">
                        <image x={0} y = {0}
                               width={blockSize}
                               height={blockSize}
                               href="https://fab.patternjam.com/400/f12846.jpg"/>
                    </pattern>
                    <pattern id="pat2" x={0} y = {0}
                             width={blockSize}
                             height={blockSize}
                             patternUnits="userSpaceOnUse">
                        <image x={0} y = {0}
                               width={blockSize}
                               height={blockSize}
                               href="https://fab.patternjam.com/400/f12778.jpg"/>
                    </pattern>
                    <pattern id="pat3" x={0} y = {0}
                             width={blockSize}
                             height={blockSize}
                             patternUnits="userSpaceOnUse">
                        <image x={0} y = {0}
                               width={blockSize}
                               height={blockSize}
                               href="https://fab.patternjam.com/400/f12784.jpg"/>
                    </pattern>
                    <pattern id="pat4" x={0} y = {0}
                             width={blockSize}
                             height={blockSize}
                             patternUnits="userSpaceOnUse">
                        <image x={0} y = {0}
                               width={blockSize}
                               height={blockSize}
                               href="https://fab.patternjam.com/400/f12842.jpg"/>
                    </pattern>
                </defs>
            </svg>
        </div>);
    }
}
