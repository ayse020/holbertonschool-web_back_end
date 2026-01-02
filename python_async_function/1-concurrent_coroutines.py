#!/usr/bin/env python3
"""
1-concurrent_coroutines.py
Execute multiple coroutines at the same time with async
"""
import asyncio
from typing import List

# Import wait_random from the previous file
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times with specified max_delay
    
    Args:
        n: Number of times to execute wait_random
        max_delay: Maximum delay for each wait_random call
        
    Returns:
        List of delays in ascending order
    """
    # Create list of tasks
    tasks = [wait_random(max_delay) for _ in range(n)]
    
    # Execute all tasks concurrently
    delays = await asyncio.gather(*tasks)
    
    # Sort delays without using sort() - using OPTIMIZED bubble sort
    sorted_delays = list(delays)
    n_len = len(sorted_delays)
    
    # OPTIMIZED Bubble sort implementation
    for i in range(n_len):
        swapped = False
        for j in range(0, n_len - i - 1):
            if sorted_delays[j] > sorted_delays[j + 1]:
                # Swap elements
                sorted_delays[j], sorted_delays[j + 1] = sorted_delays[j + 1], sorted_delays[j]
                swapped = True
        
        # If no swapping happened, list is already sorted
        if not swapped:
            break
    
    return sorted_delays
