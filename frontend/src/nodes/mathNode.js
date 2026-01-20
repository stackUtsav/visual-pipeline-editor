// MathNode.js

import { BaseNode } from './baseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[
        { id: `${id}-a`, style: { top: '33%' } },
        { id: `${id}-b`, style: { top: '66%' } }
      ]}
      outputs={[
        { id: `${id}-result` }
      ]}
    >
      <span>Adds two values</span>
    </BaseNode>
  );
};
