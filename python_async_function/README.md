# Python Async Function - Task 0

## wait_random async coroutine

This module contains an asynchronous coroutine `wait_random` that waits for a random delay.

### Function Signature
async def wait_random(max_delay: int = 10) -> float

### Parameters
- max_delay (int, optional): Maximum delay in seconds. Defaults to 10.

### Returns
- float: The actual delay that was waited.

### Example
import asyncio
from 0-basic_async_syntax import wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))

### Requirements
- Python 3.7+
- asyncio module
- random module
