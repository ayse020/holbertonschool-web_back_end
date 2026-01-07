#!/usr/bin/env python3
"""11-schools_by_topic module"""


def schools_by_topic(mongo_collection, topic):
    """Returns list of schools with specific topic"""
    return list(mongo_collection.find({"topics": topic}))
