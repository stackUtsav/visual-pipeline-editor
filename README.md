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
2. React Flow
   - Used for rendering the node-based canvas and managing connections.
3. CSS
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

project-root/
│
├── frontend/
│   ├── src/
│   │   ├── nodes/          # Node components (Input, Text, LLM, Output)
│   │   ├── submit.js       # Sends workflow data to backend
│   │   └── ...
│   └── package.json
│
├── backend/
│   ├── main.py             # FastAPI application
│   └── ...
│
└── README.md

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

2. Dynamic Text Node
   (i) The Text Node includes advanced logic:
       (a) Listens for text input changes.
       (b) Automatically resizes the node to fit content.
       (c) Uses pattern matching to detect variables inside {{ }} braces.
       (d) Dynamically creates input handles for detected variables.
