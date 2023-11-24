import React, { FC } from 'react';
import SVG from "react-inlinesvg";

interface SvgHelperProps {
    src?: string | React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    height: number;
    title: string;
    width?: number;
}

const SvgHelper: FC<SvgHelperProps> = ({ src = "", width, height, title }) => {
    return (
        <SVG src={src as string} width={width} height={height} title={title} />
    );
};

export default SvgHelper;
