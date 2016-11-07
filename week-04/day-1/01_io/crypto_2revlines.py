# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    file = open(file_name, "r")
    lines = file.readlines()
    file.close()
    output = ""
    for line in lines:
        line = line.rstrip()
        output += line[::-1]
        output += "\n"
    return output

print(decrypt("texts/reversed_zen_lines.txt"))
