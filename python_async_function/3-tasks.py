#!/usr/bin/env python3
"""
3-tasks.py
Create an asyncio.Task from wait_random function
"""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create an asyncio.Task from wait_random function

    Args:
        max_delay: Maximum delay for wait_random function

    Returns:
        asyncio.Task: Task object for wait_random
    """
    task = asyncio.create_task(wait_random(max_delay))

    return task
