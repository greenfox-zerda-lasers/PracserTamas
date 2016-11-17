# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists.

def num_of_lines(file_name):
    try:
        with open(file_name) as f:
            for i, l in enumerate(f):
                pass
        return i + 1
    except FileNotFoundError:
        return 0

if __name__ == '__main__':
    print(num_of_lines("Text_03.txt"))
