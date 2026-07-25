import json
from src.utils.normalize_data import normalize_data
from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parents[3]

class MetricsService:
    def generate_metrics(self):

        input_path = BASE_DIR / "data" / "raw" / "data.csv"

        df = pd.read_csv(input_path)

        df["Order Date"] = pd.to_datetime(df["Order Date"])

        metrics = {
            "total_sales": float(round(df["Sales"].sum(), 2)),
            "total_profit": float(round(df["Profit"].sum(), 2)),
            "total_quantity": int(df["Quantity"].sum()),
            "sales_by_category": {
                k: float(v)
                for k, v in (
                    df.groupby("Category")["Sales"]
                    .sum()
                    .round(2)
                    .sort_values(ascending=False)
                    .to_dict()
                ).items()
            },
            "sales_by_region": {
                k: float(v)
                for k, v in (
                    df.groupby("Region")["Sales"]
                    .sum()
                    .round(2)
                    .sort_values(ascending=False)
                    .to_dict()
                ).items()
            },
        }

        metrics = normalize_data(metrics)

        output_dir = BASE_DIR / "data" / "processed"
        output_dir.mkdir(parents=True, exist_ok=True)

        with open(output_dir / "metrics.json", "w", encoding="utf-8") as f:
            json.dump(metrics, f, indent=4, default=str)

        return metrics
    