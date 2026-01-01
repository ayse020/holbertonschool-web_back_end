# Python Async Comprehension

This project contains tasks for learning about async comprehensions in Python.

## Project Structure

- `python_async_comprehension/0-async_generator.py` - Async generator coroutine
- `python_async_comprehension/1-async_comprehension.py` - Async comprehension coroutine  
- `python_async_comprehension/2-measure_runtime.py` - Runtime measurement coroutine

## Tasks

### 0. Async Generator
Write a coroutine called `async_generator` that takes no arguments. The coroutine will loop 10 times, each time asynchronously wait 1 second, then yield a random number between 0 and 10.

### 1. Async Comprehensions
Write a coroutine called `async_comprehension` that collects 10 random numbers from `async_generator` using an asynchronous comprehension.

### 2. Measure Runtime
Write a coroutine called `measure_runtime` that executes `async_comprehension` four times in parallel using `asyncio.gather()` and measures the total execution time.

## Requirements

- Python 3.7+
- asyncio module
- random module

## Installation

```bash
git clone https://github.com/ayse020/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/python_async_comprehension
