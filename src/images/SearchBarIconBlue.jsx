import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchBarIcon = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.556 2.444a6.111 6.111 0 1 0 0 12.223 6.111 6.111 0 0 0 0-12.223ZM0 8.556a8.556 8.556 0 1 1 15.408 5.123l6.234 6.235a1.222 1.222 0 1 1-1.728 1.728l-6.235-6.234A8.556 8.556 0 0 1 0 8.556Z"
      fill="#187DC2"
    />
  </Svg>
)

export default SearchBarIcon;
