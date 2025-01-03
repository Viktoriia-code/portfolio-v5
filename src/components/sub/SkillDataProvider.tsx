import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props) => {
  return (
  <div>
    <StaticImage
        src={src}
        width={width}
        height={height}
        alt='skill image'
    />
  </div>
  )
}

export default SkillDataProvider