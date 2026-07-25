import numpy as np

def normalize_data(value):
    if isinstance(value, np.integer):
        return int(value)

    if isinstance(value, np.floating):
        return float(value)

    if isinstance(value, dict):
        return {k: normalize_data(v) for k, v in value.items()}

    if isinstance(value, list):
        return [normalize_data(v) for v in value]

    return value