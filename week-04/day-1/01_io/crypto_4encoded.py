# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt(file_name):
    file = open(file_name, "r")
    lines = file.readlines()
    file.close()

    output = ""
    for line in lines:
        for i in line:
                if i == " " or i == "\n":
                    output += i
                else:
                    result = ord(i)
                    result -= 1
                    result = chr(result)
                    output += result

    return output

print(decrypt("texts/encoded_zen_lines.txt"))
