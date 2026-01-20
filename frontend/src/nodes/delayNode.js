// DelayNode.js

import { BaseNode } from './baseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[
        { id: `${id}-input` }
      ]}
      outputs={[
        { id: `${id}-output` }
      ]}
    >
      <span>Delays input</span>
    </BaseNode>
  );
};
