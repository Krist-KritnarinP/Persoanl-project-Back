# Trip collaboration roadmap

Updated: 2026-09-30

## First release

- [x] Owner can invite an existing account by email as a viewer or editor.
- [x] Invitee must accept or decline from their dashboard before gaining access.
- [x] Owner can see pending/accepted/declined invitations and revoke access.
- [x] Viewers can read itinerary, travel overview, their own weather history, and the trip ledger.
- [x] Editors can change itinerary and ledger. Only owner can delete the trip, manage collaborators, or create/revoke the public read-only share link.
- [x] Enforce membership and role checks in API reads and writes; public share keeps its existing whitelist.
- [x] Remove collaboration records when either account or trip is deleted; include a user's collaboration list in account export.
- [x] Apply the additive migration to the database configured in this environment; confirmed existing trips remain. Apply it separately to any other database environment before deploying the collaboration API.
- [ ] Verify owner/viewer/editor, invitation acceptance/decline, revocation, account deletion, and public-share privacy against a temporary PostgreSQL database.
- [ ] Email new invitations. For now, they appear on the invited user's dashboard after sign-in.

## API and storage

- `TripCollaborator` is unique per `(trip_id, user_id)`, with `pending`, `accepted`, or `declined` status and `viewer` or `editor` role.
- `POST /api/collaboration/trips/:tripId/collaborators` invites an existing account. Invitees list invitations with `GET /api/collaboration/invitations` and respond with `PUT /api/collaboration/invitations/:tripId` and `{ "accepted": true|false }`.
- Owners list/revoke collaborators under `/api/collaboration/trips/:tripId/collaborators`; accepted collaborators can leave through `/api/collaboration/trips/:tripId/membership`.
- Trip membership grants access to that trip's itinerary, overview, weather request/history, and billing ledger. Each user's AI history remains private to that account.
- Editor access includes all itinerary edits and billing ledger mutations. It does not include trip deletion, invite management, or public share management.
- Public `/api/shared/:token` retains its existing read-only whitelist and never exposes billing or collaboration account details.

## Later decisions

- Decide whether billing needs a permission separate from itinerary editing.
- Add email delivery, invitation expiry, and owner notifications after SMTP behavior is agreed.
- Add offline trip viewing after access revocation and per-user cache handling are designed.
