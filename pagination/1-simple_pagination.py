#!/usr/bin/env python3
"""
Simple pagination
"""
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get a page from the dataset
        
        Args:
            page (int): Page number (1-indexed)
            page_size (int): Number of items per page
            
        Returns:
            List[List]: List of rows for the requested page
        """
        # Verify that page and page_size are integers
        assert isinstance(page, int) and page > 0, \
            "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "page_size must be a positive integer"

        # Calculate start and end indexes
        start_index, end_index = self.index_range(page, page_size)
        
        # Get the dataset
        dataset = self.dataset()
        
        # Return the appropriate slice or empty list if out of range
        if start_index >= len(dataset):
            return []
        
        return dataset[start_index:end_index]

    @staticmethod
    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        """
        Calculate start and end index for pagination
        
        Args:
            page (int): Page number (1-indexed)
            page_size (int): Number of items per page
            
        Returns:
            Tuple[int, int]: (start_index, end_index)
        """
        start_index = (page - 1) * page_size
        end_index = page * page_size
        return (start_index, end_index)
