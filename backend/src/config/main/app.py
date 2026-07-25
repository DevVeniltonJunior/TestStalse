from flask import Flask
from src.config.database.config_db import init_db
from flask import Flask
from src.config.main.config_cors import cors_config
from src.config.main.router import register_routes
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__)

    init_db()
    cors_config(app)
    register_routes(app)

    return app
