# Friends, group chat, and temporary location sharing

Updated: 2026-09-30

## MVP delivered in code

- Send friend requests by account email; only accepted friends can start a direct conversation or be added to a group.
- Create named group conversations and exchange plain text messages. Chat and latest locations refresh every four seconds while a conversation is open.
- Any group member can request location in the conversation. Each recipient must explicitly choose a duration and approve browser geolocation before coordinates are sent.
- Sharing durations are 5 minutes, 15 minutes, 1 hour, 8 hours, and 24 hours. The API refuses updates after expiry; the browser tracking stops at expiry and users can stop early.
- Only the latest location per sharing user/conversation is stored. Location rows cascade away when sharing is stopped or expires; the API also cleans expired shares every minute. Recipients must be members of that conversation.
- Frontend includes `/chat` and a compact floating chat dock. Trip collaborator invitation controls are compact and now sit below the trip map.

## API and rollout

- Routes are under authenticated `/api/social`; the API verifies friend status and conversation membership on every operation.
- `npm run migrate:social` adds `social_friendships`, `chat_conversations`, `chat_members`, `chat_messages`, `location_shares`, and `live_locations`. The migration is additive and does not alter trips, itinerary, or existing account records.
- Applied the migration to the database configured in this environment; a read-only check confirmed 5 existing trips and zero new conversations/messages/locations. Apply it to each other target database before deploying there.
- Message polling is near real time (4 seconds), not a persistent socket connection. Browser location updates follow `watchPosition`; background tabs and mobile OS suspension can delay updates.
- Test friend acceptance, membership/privacy boundaries, expiry, stop/revoke, and account deletion with a temporary PostgreSQL database before rollout. Do not use production data for smoke tests.

## Deferred

- Push notifications, read receipts, attachments, message deletion/moderation, location history, offline chat, and native background location.
- Direct conversations are reused for the same pair. Leaving a group removes membership and any associated location shares; group chat history remains for remaining members.
