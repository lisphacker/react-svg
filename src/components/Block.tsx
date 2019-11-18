import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';

export interface IBlockProps {
    x: number;
    y: number;
    globalProps: IGlobalProps;
}

export interface IBlockState {
    fill: string;
}

export class Block extends React.Component<IBlockProps, IBlockState> {
    private points: string;

    constructor(props: IBlockProps) {
        super(props);

        this.state = {
            fill: "grey",
        };

        const dpi = this.props.globalProps.dpi;
        const top = this.props.y * dpi;
        const left = this.props.x * dpi;
        const blockSize = this.props.globalProps.blockSize * dpi;

        const right = left + blockSize;
        const bottom = top + blockSize;

        this.points = `${left},${top} ${right},${top} ${right},${bottom} ${left},${bottom}`;
    }

    public render() {
        const polygon = <polygon points={this.points}
                                 fill={this.state.fill} stroke="black" strokeWidth="1"
                                 onClick={() => { this.applyFill(); }} />;
        return polygon;
    }

    private applyFill(): void {
        let newFill: string = "grey";
        switch (this.state.fill) {
            case "grey":
                newFill = "url('#pat1')";
                break;

            case "url('#pat1')":
                newFill = "url('#pat2')";
                break;

            case "url('#pat2')":
                newFill = "url('#pat3')";
                break;

            case "url('#pat3')":
                newFill = "url('#pat4')";
                break;

            case "url('#pat4')":
                newFill = "grey";
                break;
        }
        this.setState({
            fill: newFill,
        });
    }
}
