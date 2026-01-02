#!/usr/bin/env python3
"""
Type-annotated function that returns a function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a multiplier function.

    Args:
        multiplier (float): The multiplier value

    Returns:
        Callable[[float], float]: Function that multiplies input by multiplier
    """
    def multiplier_function(value: float) -> float:
        """
        Multiply value by the captured multiplier.

        Args:
            value (float): The value to multiply

        Returns:
            float: value multiplied by multiplier
        """
        return value * multiplier

    return multiplier_function
