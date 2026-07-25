def seed(conn):
    cursor = conn.cursor()

    tickets = [
        ("2026-07-01 09:15:00", "Alice Johnson", "Email", "Unable to login", "Open", "High"),
        ("2026-07-01 10:20:00", "Bob Smith", "Chat", "Password reset request", "Closed", "Medium"),
        ("2026-07-02 08:40:00", "Carol Davis", "Phone", "Payment failed", "In Progress", "High"),
        ("2026-07-02 11:10:00", "David Wilson", "Email", "Feature request", "Open", "Low"),
        ("2026-07-03 13:50:00", "Emma Brown", "Chat", "Refund request", "Resolved", "Medium"),
        ("2026-07-03 15:30:00", "Frank Moore", "Phone", "Bug in dashboard", "Open", "High"),
        ("2026-07-04 09:45:00", "Grace Taylor", "Email", "Account locked", "Closed", "High"),
        ("2026-07-04 16:10:00", "Henry Anderson", "Chat", "Billing question", "Pending", "Low"),
        ("2026-07-05 10:05:00", "Isabella Thomas", "Email", "Invoice not received", "Resolved", "Medium"),
        ("2026-07-05 14:25:00", "Jack Martinez", "Phone", "API integration issue", "In Progress", "High"),
        ("2026-07-06 09:30:00", "Karen White", "Chat", "Unable to update profile", "Open", "Medium"),
        ("2026-07-06 11:55:00", "Lucas Harris", "Email", "Mobile app crash", "Pending", "High"),
        ("2026-07-07 08:15:00", "Mia Clark", "Phone", "Cancel subscription", "Closed", "Low"),
        ("2026-07-07 13:40:00", "Noah Lewis", "Email", "Two-factor authentication issue", "Open", "High"),
        ("2026-07-08 10:50:00", "Olivia Walker", "Chat", "Data export request", "Resolved", "Low"),
        ("2026-07-08 15:20:00", "Paul Hall", "Phone", "Error 500 on checkout", "In Progress", "Critical"),
        ("2026-07-09 09:10:00", "Queen Baker", "Email", "Shipping address change", "Closed", "Low"),
        ("2026-07-09 12:45:00", "Ryan Young", "Chat", "Order status inquiry", "Pending", "Medium"),
        ("2026-07-10 11:35:00", "Sophia King", "Email", "Discount not applied", "Open", "Medium"),
        ("2026-07-10 16:00:00", "Thomas Scott", "Phone", "Cannot upload documents", "Resolved", "High"),
    ]

    cursor.executemany(
        """
        INSERT INTO tickets (
            created_at,
            customer_name,
            channel,
            subject,
            status,
            priority
        )
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        tickets,
    )
    