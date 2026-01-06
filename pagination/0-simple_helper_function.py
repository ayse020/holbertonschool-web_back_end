#!/usr/bin/env python3
"""
Simple helper function for pagination
"""

def index_range(page, page_size):
    """
    Returns a tuple of size two containing a start index and an end index
    for pagination.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)

