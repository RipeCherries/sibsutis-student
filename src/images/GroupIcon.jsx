import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GroupIcon = (props) => (
    <Svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                d="M13.542 13.542a4.167 4.167 0 0 1 4.166 4.166v1.563c0 .863-.7 1.562-1.562 1.562h-12.5c-.863 0-1.563-.7-1.563-1.562v-1.563a4.167 4.167 0 0 1 4.167-4.166h7.292Zm6.25 0c1.726 0 3.125 1.399 3.125 3.125v1.562c0 .863-.7 1.563-1.563 1.563h-1.562v-2.084a5.2 5.2 0 0 0-2.083-4.166h2.083ZM9.896 3.125a4.687 4.687 0 1 1 0 9.375 4.687 4.687 0 0 1 0-9.375ZM18.75 6.25a3.125 3.125 0 1 1 0 6.25 3.125 3.125 0 0 1 0-6.25Z"
                fill="#187DC2"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h25v25H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default GroupIcon;
