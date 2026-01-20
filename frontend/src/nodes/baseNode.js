// baseNode.js
import { Handle, Position } from 'reactflow';
import './baseNode.css';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className="base-node">
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={input.style}
        />
      ))}

      <div className="base-node__header">
        {title}
      </div>

      <div className="base-node__content">
        {children}
      </div>

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={output.style}
        />
      ))}
    </div>
  );
};
