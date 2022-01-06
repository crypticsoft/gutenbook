import React from "react";
import CardBlock from "./Card";

const { Fragment } = wp.element;
const { InspectorControls, RichText } = wp.blockEditor;

export default function edit({ attributes, setAttributes }) {
  const { text, title } = attributes;
  return (
    <Fragment>
      <CardBlock
        title={
          <RichText
            tagName="h1"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
            placeholder="Title"
          />
        }
        content={
          <>
            <RichText
              value={text}
              onChange={(value) => setAttributes({ text: value })}
              placeholder="Content is poetry..."
            />
          </>
        }
      ></CardBlock>
      <InspectorControls>
        <div>Custom Block inspector controls</div>
      </InspectorControls>
    </Fragment>
  );
}
