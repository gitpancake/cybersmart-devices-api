# cybersmart-devices-api

**Archived.** The Devices API for **CyberSmart** — a smart-home IoT system developed as a University Group Project. Manages the registry of smart devices in the home network.

## About CyberSmart

CyberSmart is a low-cost, low-resource, eco-friendly smart-home system built on a suite of independent Node.js microservices and Raspberry Pi hardware. A central **hub** (Raspberry Pi 3 Model B) runs the microservices backend and talks to lightweight **nodes** (Raspberry Pi Zero, running Jessie Pixel Headless) over a RESTful protocol.

## What this repo is

An Express + MongoDB service that:

- Registers new devices onto the network
- Stores device metadata (location, capability, identifier)
- Serves device info to the UI and to the state-updating API
- Calls out to devices' own endpoints for actions

Built on the standard CyberSmart microservice shape: `server.js` entrypoint, `Routes/` for HTTP handlers, `Handlers/` for business logic, `Models/` for Mongoose schemas.

## Tech stack

- **Node.js** + **Express**
- **Mongoose** (MongoDB)
- **axios** for outbound calls to device nodes
- **bluebird** for promise utilities
- **body-parser**, **compression**, **cors**

## Structure

```
server.js           # Express app entry
Routes/             # HTTP endpoints
Handlers/           # Business logic
Models/             # Mongoose schemas
```

## Running

```bash
npm install
node server.js
```

Needs MongoDB running. Connection config is in `server.js` / env.

## Related repositories

The CyberSmart ecosystem:

- [`cybersmart-ui`](https://github.com/gitpancake/cybersmart-ui) — React frontend
- [`cybersmart-users-api`](https://github.com/gitpancake/cybersmart-users-api) — user management API (bcrypt + passport-jwt)
- [`cybersmart-locations-api`](https://github.com/gitpancake/cybersmart-locations-api) — API for managing locations within the home
- [`cybersmart-device-state-updating-api`](https://github.com/gitpancake/cybersmart-device-state-updating-api) — state-management API (receives state updates from nodes, pushes updates out)
- [`cybersmart-gpio-node`](https://github.com/gitpancake/cybersmart-gpio-node) — the node software that runs on each Raspberry Pi
- [`nodejs-logger-api`](https://github.com/gitpancake/nodejs-logger-api) — CyberSmart-Logger-API — centralized logging service
