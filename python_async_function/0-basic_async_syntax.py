#!/usr/bin/env python3
"""
0-basic_async_syntax.py
Asynchronous coroutine that waits for random delay.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay
    between 0 and max_delay seconds and returns it.

    Args:
        max_delay: Maximum delay value (default: 10)

    Returns:
        float: The random delay that was waited
    """
    # Generate random delay between 0 and max_delay
    delay = random.uniform(0, max_delay)

    # Wait for the random delay
    await asyncio.sleep(delay)

    # Return the delay value
    return delay
