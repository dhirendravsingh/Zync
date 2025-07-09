# ⚡ Zync – Zap + Sync

**Zync** is an open-source automation platform inspired by Zapier that connects webhooks, triggers, and actions using an event-driven architecture. Users can create workflows (zaps) where a trigger (like a webhook hit) results in one or more automated actions (like API calls).

---

## 🚀 Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Queue**: Kafka (with KafkaJS)
- **Validation**: Zod
- **Auth**: JWT

---

## 🧠 Core Concepts

- **Zap**: A user-defined workflow containing a trigger and one or more actions.
- **Trigger**: An event (e.g., webhook) that initiates a zap.
- **Action**: A task executed when the trigger fires (e.g., HTTP call).
- **Transactional Outbox**: Ensures trigger events and queue publications are atomic.
- **Kafka Pipeline**: Events are published to Kafka and consumed by a worker for processing.

---

## 📁 Folder Structure

```
/zync
│
├── frontend/          → Next.js app for user signup, zap creation, and dashboard
├── primary-backend/   → API server for handling zaps, triggers, actions, and auth
├── webhook/           → Webhook receiver that saves trigger events into DB using transactional outbox
├── processor/         → Kafka outbox processor that reads DB events and publishes to Kafka
├── worker/            → Kafka consumer that picks events and performs the corresponding actions
└── README.md          → You're here.
```


---

## 🔄 Event Flow Architecture

1. **User creates a zap** via frontend → stored in DB via `primary-backend`.
2. **Trigger (e.g., webhook hit)** comes to `webhook/` server.
   - Trigger event + outbox record saved atomically.
3. **Outbox processor** (in `processor/`) picks unprocessed events and pushes them to Kafka.
4. **Worker** (in `worker/`) listens to Kafka and executes corresponding actions.

---

## 🔐 Authentication

- **JWT-based** authentication is used for protected routes (signup/signin).
- **Zod** is used for validating request bodies and token payloads.

---
## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/zync.git

# 2. Install dependencies
cd zync
npm install

# 3. Start services (you’ll need local Kafka and Postgres)
cd primary-backend
npm run start

cd webhook
npm run start

cd processor
npm run start

cd worker
node index.js

cd frontend
npm run dev
```

---
## 🛠️ Future Improvements

- Action types (email, DB, integrations)

- Zap execution logs

- Retry mechanism / DLQ

- Drag-and-drop UI for zap builder

---
## 📜 License
MIT – feel free to use and modify with credit.

---
## Built with ⚡ by Dhirendra Vikram Singh

Let me know if you'd like a separate `CONTRIBUTING.md`, `.env.example`, or Docker setup added next!
