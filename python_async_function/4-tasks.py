#!/usr/bin/env python3
"""
4-tasks.py
Create task_wait_n function using task_wait_random
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with the specified max_delay

    Args:
        n: Number of times to spawn task_wait_random
        max_delay: Maximum delay for each task_wait_random call

    Returns:
        List of delays in ascending order (without using sort())
    """
    # Create all tasks
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Collect results as they complete
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
