// ConditionNode.js

import { BaseNode } from './baseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[
        { id: `${id}-input` }
      ]}
      outputs={[
        { id: `${id}-true`, style: { top: '33%' } },
        { id: `${id}-false`, style: { top: '66%' } }
      ]}
    >
      <span>True / False</span>
    </BaseNode>
  );
};
