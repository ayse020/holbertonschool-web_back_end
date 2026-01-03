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
    # Use ensure_future which works in both sync and async contexts
    # It creates a task from a coroutine
    coro = wait_random(max_delay)
    task = asyncio.ensure_future(coro)
    return task
