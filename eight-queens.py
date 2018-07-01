# EIGHT QUEENS MATRIX PROBLEM
def validate_position(positions, y):
    right = y
    left = y
    for pos in reversed(positions):
        right = right + 1
        left = left - 1
        if(pos == left or pos == y or pos == right):
            return False
    return True


def eight_queens(positions=[], y=0, results=[]):
    # final success base case
    if(len(positions) == 0 and y == 8):
        return results
    if(len(results) == 8):
        return results
    
    # new config found base case + continue search
    if(len(positions) == 8):
        results.append([pos for pos in positions])
        newY = positions.pop() + 1
        return eight_queens(positions, newY, results)

    # rollback base case
    if(y == 8):
        newY = positions.pop() + 1
        return eight_queens(positions, newY, results)
    else:
        if(validate_position(positions, y)):
            positions.append(y)
            # print(positions)
            return eight_queens(positions, 0, results)
        else:
            return eight_queens(positions, y + 1, results)


print(eight_queens())