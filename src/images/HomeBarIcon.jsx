import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeBarIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.34 6.256c.37-.341.95-.341 1.32 0l7.652 7.061 2.391 2.207c.383.353.397.94.033 1.31a.978.978 0 01-1.352.032l-.775-.715v6.995c0 1.024-.857 1.854-1.913 1.854H9.304c-1.056 0-1.913-.83-1.913-1.854v-6.995l-.775.715a.978.978 0 01-1.352-.032.907.907 0 01.033-1.31l2.391-2.207 7.652-7.061zm-6.036 8.13v8.76h3.826v-4.634c0-1.535 1.285-2.78 2.87-2.78 1.585 0 2.87 1.245 2.87 2.78v4.634h3.826v-8.76L16 8.206l-6.696 6.18zm7.652 8.76v-4.634c0-.512-.428-.927-.956-.927s-.957.415-.957.927v4.634h1.913z"
        fill="#fff"
      />
    </Svg>
  )
}

export default HomeBarIcon;
