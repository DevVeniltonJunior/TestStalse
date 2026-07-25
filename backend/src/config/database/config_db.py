from pathlib import Path
from src.config.database.seed import seed
from src.config.database import get_connection

def init_db():
    conn = get_connection()

    schema = Path(__file__).parent / "schema.sql"

    with open(schema, encoding="utf-8") as f:
        conn.executescript(f.read())

    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM tickets")
    has_data = cursor.fetchone()[0] > 0

    if not has_data:
        seed(conn)

    conn.commit()
    conn.close()