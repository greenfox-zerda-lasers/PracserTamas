# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    file = open(file_name, "r")
    lines = file.readlines()
    file.close()
    output = ""
    for line in lines:
        # line = line[0:-1]
        # temp = ""
        for i in range(len(line)):
            if i % 2 == 0:
                output += line[i]
        # Az elozo sorban az output temp volt
        # temp += "\n"
        # output += temp

    return(output)

print(decrypt("texts/duplicated_chars.txt"))
