"""Parse an unbroken sentence into possible words.

Example:

    >>> sentences = parse('iatenoodlesfordinnertonight', vocab)

    >>> for s in sorted(sentences):
    ...    print(s)
    i a ten oodles for dinner to night
    i a ten oodles for dinner tonight
    i a ten oodles ford inner to night
    i a ten oodles ford inner tonight
    i ate noodles for dinner to night
    i ate noodles for dinner tonight
    i ate noodles ford inner to night
    i ate noodles ford inner tonight
"""

vocab = {'i', 'a', 'ten', 'oodles', 'ford', 'inner', 'to', 'night', 'ate', 'noodles', 'for', 'dinner', 'tonight'}

def parse(phrase, vocab):
    store = set()
    for word in vocab:
        if phrase == word:
            store.add(word)
    elif phrase.startswith(word):
        word_and_rest = { word + ' ' + parsed for parsed in parse(phrase[len(word):], vocab) }
        store.update(word_and_rest)
    return store

if __name__ == '__main__':
    import doctest

    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASSED; GREAT JOB! ***\n")
