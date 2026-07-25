# How Node.js Work

Node.js is a JavaScript runtime environment that allows us to run JavaScript code outside the browser.

## Working of Node.js

1. Client sends a request to Node.js server.

2. Node.js receives the request using HTTP module.

3. Request goes to Event Loop.

4. Event Loop checks whether the task is blocking or non-blocking.

5. If task is simple, Event Loop handles it directly.

6. If task is heavy (file system, database, API call), Node.js sends it to background workers.

7. After completing the task, callback is added to Event Queue.

8. Event Loop takes the callback and sends the response back to the client.


## Main Components of Node.js

### 1. V8 Engine
- Converts JavaScript code into machine code.
- Provided by Google Chrome.

### 2. Event Loop
- Handles multiple requests.
- Makes Node.js asynchronous and non-blocking.

### 3. Callback Queue
- Stores completed tasks waiting for execution.

### 4. Thread Pool
- Handles heavy operations like:
  - File System
  - Database operations
  - Encryption


## Example Flow

Client Request
        |
        ↓
 Node.js Server
        |
        ↓
 Event Loop
        |
        ↓
 Background Task
        |
        ↓
 Callback Queue
        |
        ↓
 Response to Client


## Why Node.js is Fast?

- Single threaded architecture
- Non-blocking I/O
- Asynchronous operations
- Event-driven architecture