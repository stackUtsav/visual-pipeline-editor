from fastapi import FastAPI
from typing import Dict, List
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI()


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    """
    Detect if the graph formed by nodes and edges is a DAG
    using Kahn's Algorithm (topological sorting).
    """

    # Build adjacency list and indegree map
    adj = defaultdict(list)
    indegree = defaultdict(int)

    # Initialize indegree for all nodes
    for node in nodes:
        indegree[node["id"]] = 0

    # Build graph
    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        adj[source].append(target)
        indegree[target] += 1

    # Queue nodes with zero indegree
    queue = deque([node_id for node_id in indegree if indegree[node_id] == 0])

    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1

        for neighbor in adj[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    # If all nodes are visited, it's a DAG
    return visited_count == len(nodes)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Dict):
    nodes = pipeline.get("nodes", [])
    edges = pipeline.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges),
    }
