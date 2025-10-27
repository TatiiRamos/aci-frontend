import { SVGProps } from 'react'

const CheckSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="3.67285" width="18" height="18" rx="2" fill="#BEC624" />
    <path
      d="M10 17.0729L6 13.0729L7.4 11.6729L10 14.2729L16.6 7.67285L18 9.07285L10 17.0729Z"
      fill="white"
    />
  </svg>
)

export default CheckSVG
