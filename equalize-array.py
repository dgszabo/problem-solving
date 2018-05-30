# EQUALIZE ARRAY FREQ COUNTER PROBLEM
# HackerRank
from collections import Counter
def equalizeArray(arr):
    freqCounts = Counter(arr)
    return len(arr) - max(freqCounts.values())