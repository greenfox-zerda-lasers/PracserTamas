# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def gib_mir_ein_string(string):
    if string == "":
        return "" #vagy helyette lehet string
    else:
        return string[0] + "*" + gib_mir_ein_string(string[1:])

print(gib_mir_ein_string("xyxyxyxyx"))
