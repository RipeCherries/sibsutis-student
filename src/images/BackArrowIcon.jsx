import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackArrowIcon = (props) => (
    <Svg
        width={18}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.719 32a1.317 1.317 0 0 1-.907-.363L.374 16.865A1.204 1.204 0 0 1 0 15.997c0-.325.134-.637.374-.867L15.812.358c.241-.23.567-.358.907-.358.34 0 .666.129.907.358.24.23.374.543.374.868 0 .325-.134.637-.374.868L3.1 15.997l14.525 13.904c.179.172.3.391.35.63.049.237.023.484-.074.708a1.244 1.244 0 0 1-.471.552c-.21.135-.458.208-.712.209Z"
            fill="#000"
        />
    </Svg>
)

export default BackArrowIcon
