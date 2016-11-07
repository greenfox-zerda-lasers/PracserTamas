# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
    file = open(file_name, "r")
    lines = file.readlines()
    file.close()
    lines.reverse()
    result = "".join(lines)

    return result

print(decrypt("texts/reversed_zen_order.txt"))
