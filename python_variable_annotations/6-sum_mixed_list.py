#!/usr/bin/env python3
"""
Type-annotated function to sum a mixed list of integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a mixed list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): List containing integers and floats

    Returns:
        float: Sum of all numbers in the list
    """
    return sum(mxd_lst)
