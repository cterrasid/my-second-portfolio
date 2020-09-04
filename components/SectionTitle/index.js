import React from 'react'
import Tag from 'components/Tag'
import { pxToRem } from 'styles/utils'
import { breakpoints } from 'styles/theme'

export default function SectionTitle({
  title,
  containerWidth = 'fit-content',
}) {
  return (
    <>
      <div>
        <Tag name="h1">
          <h1>{title}</h1>
        </Tag>
      </div>
      <style jsx>{`
        h1 {
          font-size: ${pxToRem({ px: 56 })};
          letter-spacing: ${pxToRem({ px: -3 })};
          margin: 0;
          text-align: end;
          width: min-content;
        }

        div {
          width: ${containerWidth};
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          h1 {
            font-size: ${pxToRem({ px: 70 })};
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          h1 {
            font-size: ${pxToRem({ px: 75 })};
          }
        }
      `}</style>
    </>
  )
}
