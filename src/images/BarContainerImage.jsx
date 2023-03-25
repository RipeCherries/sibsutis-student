import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"

function BarContainerImage(props) {
  return (
    <Svg
      width={400}
      height={60}
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#187DC2" d="M0 10H400V60H0z" />
      <G clipPath="url(#clip0_89_45)">
        <Path
          d="M0-2L11.111-.336C22.222 1.36 44.444 4.641 66.667 4.25 88.889 3.86 111.11-.36 133.333.086 155.556.5 177.778 5.5 200 8s44.444 2.5 66.667 2.086c22.222-.445 44.444-1.227 66.666-3.336 22.223-2.11 44.445-5.39 55.556-7.086L400-2v15H0V-2z"
          fill="#187DC2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_89_45">
          <Path fill="#fff" d="M0 0H400V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BarContainerImage
