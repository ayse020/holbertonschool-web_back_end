#!/usr/bin/env python3
"""
Type-annotated function with duck typing for iterable objects.
"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return list of tuples with elements and their lengths.

    Args:
        lst (Iterable[Sequence]): Iterable containing sequences

    Returns:
        List[Tuple[Sequence, int]]: List of tuples (element, length)
    """
    return [(i, len(i)) for i in lst]
