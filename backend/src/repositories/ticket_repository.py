from typing import Optional
from src.config.database import get_connection

class TicketRepository:
    def patch_ticket(self, _id, data):
        updates = []
        params = []

        for field, value in data.items():
            updates.append(f"{field} = ?")
            params.append(value)

        if not updates:
            return False

        params.append(_id)

        query = f"""
            UPDATE tickets
            SET {", ".join(updates)}
            WHERE id = ?
        """

        with get_connection() as conn:
            cursor = conn.execute(query, params)
            conn.commit()

            return cursor.rowcount > 0
        
    def list_tickets(self, filters: Optional[dict] = None):
        query = """
            SELECT
                id,
                customer_name,
                channel,
                subject,
                status,
                priority,
                created_at
            FROM tickets
        """

        params = []

        if filters:
            conditions = []

            for field, value in filters.items():
                conditions.append(f"{field} = ?")
                params.append(value)

            query += " WHERE " + " AND ".join(conditions)

        with get_connection() as conn:
            cursor = conn.execute(query, params)
            return [dict(row) for row in cursor.fetchall()]
        