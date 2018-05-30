# SERVICE LANE ARRAY ITERATION PROBLEM
# HackerRank
def serviceLane(n, cases, wid):
    return [ min(wid[c[0]:c[1] + 1]) for c in cases ]