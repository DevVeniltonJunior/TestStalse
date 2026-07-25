from src.controllers.tickets_controller import tickets_bp
from src.controllers.metricts_controller import metrics_bp

def register_routes(app):
    app.register_blueprint(tickets_bp, url_prefix="/tickets")
    app.register_blueprint(metrics_bp, url_prefix="/metrics")
