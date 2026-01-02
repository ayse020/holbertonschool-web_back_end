#!/usr/bin/env python3
"""
Type-annotated function to sum a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Calculate the sum of a list of floats.

    Args:
        input_list (List[float]): List of floating-point numbers

    Returns:
        float: Sum of all numbers in the list
    """
    return sum(input_list)
