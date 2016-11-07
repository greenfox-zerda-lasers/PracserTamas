# def char_codes(string):
#     # result = list(string)
#     result = list(string).ord()
#     return result
#
# print(char_codes('Create'))

# def char_codes(string):
#     char = list(string)
#     result = []
#
#     for i in char:
#         result.append(ord(i))
#     return result
#
# print(char_codes('Create'))

def string(char_codes):

    result = ""

    for i in range(len(char_codes)):
        result + = (chr(char_codes[i]))

    return result

print(string([67, 114, 101, 97, 116, 101]))
