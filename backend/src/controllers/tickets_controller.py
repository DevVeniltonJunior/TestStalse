from flask import Blueprint, request
from src.services.ticket_service import TicketService
import requests

tickets_bp = Blueprint(
    "tickets",
    __name__
)

@tickets_bp.get("")
def list_tickets():
    data = request.args
    result = TicketService().list_tickets(data)
    return {"message": "Fetch tickets successfully", "data": result}, 200

@tickets_bp.patch("/<_id>")
def patch_ticket(_id):
    data = request.json
    print("Re: ", data)
    requests.post("https://juniorsasas.app.n8n.cloud/webhook-test/ticket-event")
    if not data["status"] and not data["priority"]:
        return {"message": "status or priority must be provided"}, 400
    updated = TicketService().patch_ticket(_id, data)

    if not updated:
        return {"message": "Something went wrong"}, 500

    return {"message": "Ticket updated successfully"}, 200
