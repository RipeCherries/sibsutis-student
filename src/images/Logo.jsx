import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={100}
        height={100}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#a)" stroke="#187DC2" strokeWidth={3}>
            <Path d="M48.75 73.125c19.675 0 35.625-15.95 35.625-35.625S68.425 1.875 48.75 1.875 13.125 17.825 13.125 37.5s15.95 35.625 35.625 35.625Z" />
            <Path d="M62.5 86.875c19.675 0 35.625-15.95 35.625-35.625S82.175 15.625 62.5 15.625 26.875 31.575 26.875 51.25 42.825 86.875 62.5 86.875Z" />
            <Path d="M51.25 98.125c19.675 0 35.625-15.95 35.625-35.625S70.925 26.875 51.25 26.875 15.625 42.825 15.625 62.5s15.95 35.625 35.625 35.625Z" />
            <Path d="M37.5 86.875c19.675 0 35.625-15.95 35.625-35.625S57.175 15.625 37.5 15.625 1.875 31.575 1.875 51.25 17.825 86.875 37.5 86.875Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h100v100H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default SvgComponent
