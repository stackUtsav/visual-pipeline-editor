// APINode.js

import { BaseNode } from './baseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[
        { id: `${id}-request` }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <span>API Call</span>
    </BaseNode>
  );
};
