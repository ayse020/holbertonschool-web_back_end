#!/usr/bin/env python3
"""
Type-annotated function to create a tuple from string and int/float.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with string and square of int/float.

    Args:
        k (str): The string key
        v (Union[int, float]): Integer or float value

    Returns:
        Tuple[str, float]: Tuple containing k and v squared
    """
    return (k, v ** 2)
