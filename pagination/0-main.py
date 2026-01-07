#!/usr/bin/env python3
"""
Main file for testing
"""

index_range = __import__('0-simple_helper_function').index_range

# Test 1
res = index_range(1, 7)
print(type(res))  # <class 'tuple'>
print(res)        # (0, 7)

# Test 2
res = index_range(page=3, page_size=15)
print(type(res))  # <class 'tuple'>
print(res)        # (30, 45)
