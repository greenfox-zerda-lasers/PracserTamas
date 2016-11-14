# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def gib_mir_ein_string(string):
    if string == "":
        return "" #vagy helyette lehet string
    if string[0] == "x":
        return "y" + gib_mir_ein_string(string[1:])
    else:
        return string[0] + gib_mir_ein_string(string[1:])

print(gib_mir_ein_string("xyxyxyxyx"))
