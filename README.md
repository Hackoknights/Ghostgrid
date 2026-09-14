# GhostGrid — Emergency Command

A single-page, self-contained web app simulating an offline-first emergency mesh network dashboard. Built as a demo/prototype — all mesh, node, and survivor data is simulated client-side; there is no real GPS, radio, or network backend.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — markup, CSS, and JavaScript in one file. Login screen, admin/survivor dashboards, mesh topology view, survivor map, roster, SOS flow, and an in-app AI assistant panel. |
| `ghostgrid.json` | Web App Manifest — lets the app be installed as a PWA (name, icons/theme colors, standalone display mode, start URL). |
| `ghostgrid.js` | Service worker — caches same-origin requests as they're fetched and serves them back when offline, so the app keeps working without a connection. |

These are the filenames `index.html` now references internally (manifest link, service worker registration, and `start_url`), so the app is ready to deploy as-is.

## Running it

No build step — it's static. Either:
- Open `index.html` directly in a browser, or
- Serve the folder locally (service workers require `http://localhost` or `https://`, not `file://`) — e.g. `python3 -m http.server`, then visit the served address.

## Demo credentials (shown on the login screen)

- **Survivor login:** any name + mesh access code `survivor1`
- **Admin login:** Operator ID `admin` + passcode `ghostgrid1`

## What's inside

- **Survivor view** — hold-to-activate SOS button (mimics a phone's Emergency SOS gesture), a live status feed, and a read-only survivor map.
- **Admin view** — full survivor roster (editable), mesh node topology with simulated battery/signal/ghosting, coverage view, and a compass-based "navigate to survivor" tool.
- **AI Assistant panel** — a rule-based (not API-backed) assistant that answers questions about the *current simulated telemetry*: status briefs, node health, root-cause/anomaly analysis, SOS priority ranking, and "what-if node fails" simulations.
- Randomized background events (battery drain, node disconnects/"ghosting", reconnects) simulate a live mesh for demo purposes.

## Notes

- All authentication, telemetry, and mesh behavior is simulated in-browser — nothing is sent over a network.
- Not a substitute for real emergency services or communication systems.
