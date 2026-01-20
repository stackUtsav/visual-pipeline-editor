// LoggerNode.js

import { BaseNode } from './baseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[
        { id: `${id}-log` }
      ]}
    >
      <span>Logs value</span>
    </BaseNode>
  );
};
