from dataclasses import dataclass

@dataclass
class Ticket:
    id: int
    created_at: str
    customer_name: str
    channel: str
    subject: str
    status: str
    priority: str
    