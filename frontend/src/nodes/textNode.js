import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';
import './textNode.css';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  // Feature 1: dynamic size
  const [size, setSize] = useState({
    width: 200,
    height: 80,
  });

  // Feature 2: extracted variables
  const [variables, setVariables] = useState([]);

  const textareaRef = useRef(null);

  /* ---------- Feature 1: Auto resize ---------- */
  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto';

    const newHeight = textareaRef.current.scrollHeight + 20;
    const newWidth = Math.min(
      Math.max(200, text.length * 7),
      400
    );

    setSize({
      width: newWidth,
      height: newHeight,
    });
  }, [text]);

  /* ---------- Feature 2: Variable detection ---------- */
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }

    setVariables([...found]);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      width={size.width}
      height={size.height}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[
        { id: `${id}-output` },
      ]}
    >
      <label className="text-node-label">
        Text:
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-node-textarea"
          placeholder="Enter text..."
        />
      </label>
    </BaseNode>
  );
};
