// outputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      title="Output"
      inputs={[
        { id: `${id}-value` }
      ]}
    >
      <label style={{ display: 'block', marginBottom: 4 }}>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>

      <label style={{ display: 'block' }}>
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
