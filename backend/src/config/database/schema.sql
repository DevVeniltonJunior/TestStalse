CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    channel TEXT NOT NULL,
    subject TEXT NOT NULL,
    status TEXT NOT NULL,
    priority TEXT NOT NULL
);
