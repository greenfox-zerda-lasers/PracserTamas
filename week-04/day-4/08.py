# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.

def gib_mir_ein_string(string):
    if string == "":
        return "" #vagy helyette lehet string
    if string[0] == "x":
        return "" + gib_mir_ein_string(string[1:])
    else:
        return string[0] + gib_mir_ein_string(string[1:])

print(gib_mir_ein_string("xyxyxyxyx"))
