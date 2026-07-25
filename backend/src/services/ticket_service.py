from typing import Optional
from src.repositories.ticket_repository import TicketRepository

ALLOWED_FILTERS = {
    "status",
    "priority",
    "channel",
    "customer_name",
}

PATCH_ALLOWED_FIELD = {
    "status",
    "priority",
}

class TicketService:
    def __init__(self):
        self.repository = TicketRepository()

    def list_tickets(self, data: Optional[dict] = None):
        filters = None
        if data:
          filters = {
              key: value
              for key, value in data.items()
              if key in ALLOWED_FILTERS and value
          }
        return self.repository.list_tickets(filters)

    def patch_ticket(self, _id: int, data: dict):
        payload = {
            key: value
            for key, value in data.items()
            if key in PATCH_ALLOWED_FIELD and value
        }
        
        return self.repository.patch_ticket(_id, payload)
    