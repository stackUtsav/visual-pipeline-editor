# visual-pipeline-editor
Visual node-based workflow editor built with React, featuring reusable node abstractions and FastAPI backend integration for workflow validation.

#Visual Node-Based Workflow Editor

#Overview

This project is a visual node-based workflow editor built using React for the frontend and FastAPI for backend validation.
It allows users to construct workflows by connecting different types of nodes (Input, Text, LLM, Output) on a canvas and validates the structure of the workflow through a backend service.

The primary focus of this project is on:
1. Scalable frontend architecture
2. Reusable UI abstractions
3. Dynamic node behavior
4. Frontend–backend integration
5. Graph structure validation (DAG checking)

#Problem Statement

Visual workflow editors are widely used in modern systems such as data pipelines, AI orchestration tools, and automation platforms.

The challenge is to design a system where:
1. New node types can be added easily without duplicating code
2. Nodes can dynamically adapt based on user input
3. Workflow structure can be validated programmatically
4. Frontend and backend communicate using a well-defined contract

This project addresses these challenges by implementing a reusable node abstraction layer on the frontend and a backend service to analyze and validate workflow graphs.

#Features:

Frontend
1. Visual workflow canvas with draggable nodes.
2. Multiple node types:
   (a) Input Node
   (b) Text Node
   (c) LLM Node
   (d) Output Node
3. Reusable node abstraction to minimize duplicated logic.
4. Dynamic Text Node behavior:
   (a) Automatically resizes based on text content.
   (b) Detects variables written in {{variable_name}} format.
   (c) Dynamically creates input handles for detected variables.
5. Styled UI with a consistent design system
6. Submission of workflow structure (nodes and edges) to backend API

Backend
1. REST API built using FastAPI.
2. Endpoint to parse workflow structure.
3. Computes:
   (a) Total number of nodes
   (b) Total number of edges
4. Validates whether the workflow forms a Directed Acyclic Graph (DAG).
5. Returns structured JSON response for frontend consumption.

#Tech Stack:

Frontend
1. React (JavaScript)
   - Used for building the UI and managing application state.
3. React Flow
   - Used for rendering the node-based canvas and managing connections.
4. CSS
   - Used for custom styling and layout.

Backend
1. FastAPI (Python)
   - Used to create REST API endpoints.
2. Uvicorn
   - ASGI server to run the FastAPI application.

Communication
1. REST API (JSON)
   - Used for frontend–backend data exchange.

#Project Architecture

![Execution Flow](assets/Screenshot%20(94).png) 

#Frontend Implementation Details

1. Node Abstraction
   
   (i) A base node abstraction was created to:
   
       (a) Share layout, styling, and handle logic.
   
       (b) Allow rapid creation of new node types.
   
       (c) Maintain consistency across all nodes.

   (ii) Each node type extends this abstraction by providing:
   
       (a) Custom content.
   
       (b) Input/output handles.
   
       (c) Node-specific behavior.

3. Dynamic Text Node
   
   (i) The Text Node includes advanced logic:
   
       (a) Listens for text input changes.
   
       (b) Automatically resizes the node to fit content.
   
       (c) Uses pattern matching to detect variables inside {{ }} braces.
   
       (d) Dynamically creates input handles for detected variables.

#Backend Implementation Details

1. /pipelines/parse Endpoint

   This endpoint accepts a JSON payload containing:

   {
     "nodes": [{ "id": "A" }, { "id": "B" }],
   
     "edges": [{ "source": "A", "target": "B" }]
   }

2. It performs the following operations:
   (a) Counts total nodes.
   (b) Counts total edges.
   (c) Checks if the graph is a Directed Acyclic Graph (DAG).

   Response Format
   {
     "num_nodes": 2,
   
     "num_edges": 1,
   
     "is_dag": true
   }

#Frontend–Backend Integration

1. The frontend collects the current workflow state (nodes and edges).
2. On submission, the data is sent to the backend via a POST request.
3. The backend processes and validates the workflow structure.
4. The frontend receives the response and displays the results to the user.
5. This integration ensures separation of concerns while maintaining a clean communication contract.

#Key Learnings

 1. Designing reusable and scalable frontend component architectures.
 2. Managing dynamic UI behavior based on user input.
 3. Structuring JSON-based communication between frontend and backend.
 4. Implementing graph traversal logic for DAG validation.
 5. Building real-world workflow editor functionality similar to industry tools.

#Future Improvements

 1. Execution of workflows beyond validation.
 2. Persistent storage of workflows.
 3. Improved error handling and validation feedback.
 4. Support for additional node types.
 5. Authentication and multi-user workflows.

#Disclaimer

This project was built as an assignment-style technical project for learning and demonstration purposes.
It is not an official product and does not represent any proprietary system.
