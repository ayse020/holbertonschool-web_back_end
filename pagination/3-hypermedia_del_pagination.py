#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""
import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Get hypermedia pagination information with deletion resilience
        
        Args:
            index: Current start index of the return page
            page_size: Number of items per page
            
        Returns:
            Dict with pagination info:
            - index: current start index
            - next_index: next index to query
            - page_size: current page size
            - data: actual page of dataset
        """
        dataset = self.indexed_dataset()
        data_length = len(dataset)
        
        # Validate index is within valid range
        assert index is not None and 0 <= index < data_length
        
        data = []
        current_index = index
        items_collected = 0
        
        # Collect data until we reach page_size or end of dataset
        while items_collected < page_size and current_index < data_length:
            if current_index in dataset:
                data.append(dataset[current_index])
                items_collected += 1
            current_index += 1
        
        # Calculate next_index
        next_index = current_index if current_index < data_length else None
        
        return {
            'index': index,
            'next_index': next_index,
            'page_size': len(data),
            'data': data
        }
