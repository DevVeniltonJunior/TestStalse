from flask import Blueprint
from src.services.metrics_service import MetricsService

metrics_bp = Blueprint(
    "metrics",
    __name__
)

@metrics_bp.get("")
def get_metrics():
    result = MetricsService().generate_metrics()

    return {"message": "Fetch metrics successfully", "data": result}, 200
