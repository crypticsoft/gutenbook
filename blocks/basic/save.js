import React from 'react'
import CardBlock from './Card'

const { RichText } = wp.blockEditor

export default function save({ attributes }) {
  const { title, text } = attributes

  const titleMarkup = title || '<span style="opacity: 0.2">Title</span>'
  const textMarkup = text || '<span style="opacity: 0.2">Code is poetry.</span>'

  return (
    <div>
      <CardBlock
        title={<RichText.Content tagName="h1" value={titleMarkup} />}
        content={<RichText.Content tagName="div" value={textMarkup} />}
      ></CardBlock>
    </div>
  )
}
