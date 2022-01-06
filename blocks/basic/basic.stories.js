import React from 'react'
import { RenderBlock } from 'gutenbook'
import block from './index'
import { jsxDecorator } from "storybook-addon-jsx";

const { InspectorControls, RichText } = wp.blockEditor

export default {
  title: 'Basic',
  decorators: [jsxDecorator],
}

export const toStorybook = () => {
  return <RenderBlock block={block} />
}

toStorybook.story = {
  name: 'RichText',
}
