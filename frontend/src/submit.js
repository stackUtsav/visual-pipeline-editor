// submit.js

import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    try {
      const response = await fetch(
        'http://localhost:3000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();

      alert(
        `Pipeline Analysis Result:\n\n` +
        `Number of Nodes: ${result.num_nodes}\n` +
        `Number of Edges: ${result.num_edges}\n` +
        `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      alert('Failed to submit pipeline. Please check backend is running.');
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
