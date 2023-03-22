import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
    <Svg
        width={33}
        height={33}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.98 7.677a6.302 6.302 0 1 0 0 12.604 6.302 6.302 0 0 0 0-12.604ZM5.155 13.98a8.823 8.823 0 1 1 15.89 5.284l6.429 6.43a1.26 1.26 0 0 1-1.783 1.782l-6.429-6.43A8.823 8.823 0 0 1 5.156 13.98Z"
            fill="#187DC2"
        />
    </Svg>
)

export default SearchIcon
