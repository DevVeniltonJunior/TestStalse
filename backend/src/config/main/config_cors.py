from flask_cors import CORS

def cors_config(app):
    CORS(
        app,
        resources={
            r"/*": {
                "origins": [
                    "*"
                ]
            }
        },
        supports_credentials=True
    )