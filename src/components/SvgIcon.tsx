import sprite from "./../assets/icons-sprite.svg"
import styled from "styled-components";

type SvgIconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const SvgIcon = ({iconId, width, height, viewBox}: SvgIconProps) => {
    return (
        <Svg width={width || "24"}
             height={height || "24"}
             viewBox={viewBox || "0 0 24 24"}>
            <use xlinkHref={`${sprite}#${iconId}`}></use>
        {/* ./../assets/icons-sprite.svg#newpaper   */}
        </Svg>
    );
};


const Svg=styled.svg`
    min-width: fit-content;
`

