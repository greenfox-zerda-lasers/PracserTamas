import string

# word1 = "Kaukazus@"
# word2 = "saukazuk"

def anagramm(word1, word2):
    if not (isinstance(word1, str) and isinstance(word2, str)):
        raise TypeError("Give me a string!")
    letters = string.ascii_letters
    list1 = []
    list2 = []
    for i in range(len(word1)):
        if word1[i] in letters:
            list1.append(word1.lower()[i])
    list1.sort()
    # print(list1)

    for i in range(len(word2)):
        if word2[i] in letters:
            list2.append(word2.lower()[i])
    list2.sort()
    # print(list2)

    if list1 == list2:
        return True
    else:
        return False

# anagramm(word1, word2)

def count_letters(word1):
    if not (isinstance(word1, str) and isinstance(word2, str)):
        raise TypeError("Give me a string!")
    letters = string.ascii_letters
    dictionary = {}
    for i in range(len(word1)):
        if word1[i] in letters and word1[i] not in dictionary:
            dictionary[word1.lower()[i]] = 1
        elif word1[i] in letters :
            dictionary[word1.lower()[i]] += 1
    return(dictionary)

# count_letters(word1)
