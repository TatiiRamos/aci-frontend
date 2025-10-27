import * as React from 'react'
import { SVGProps } from 'react'
const VideoFrameSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="81"
    height="82"
    viewBox="0 0 81 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Frame" clipPath="url(#clip0_1413_24023)">
      <ellipse
        id="Ellipse 6"
        cx="39.834"
        cy="41.8475"
        rx="26"
        ry="26.325"
        fill="#BEC623"
      />
      <path
        id="Vector"
        d="M40.5 0.672852C18.4368 0.672852 0.5 18.8339 0.5 41.1729C0.5 63.5118 18.4368 81.6729 40.5 81.6729C62.5632 81.6729 80.5 63.5118 80.5 41.1729C80.5 18.8339 62.5632 0.672852 40.5 0.672852ZM54.9842 43.5602L33.4263 58.055C31.5737 59.3339 29.1316 57.9697 29.1316 55.6676V26.5929C29.1316 24.376 31.5737 23.0118 33.4263 24.2055L54.9842 38.7855C56.6684 39.9792 56.6684 42.3665 54.9842 43.5602Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1413_24023">
        <rect
          width="80"
          height="81"
          fill="white"
          transform="translate(0.5 0.672852)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default VideoFrameSVG
