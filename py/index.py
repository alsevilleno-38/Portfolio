import os
import sys

def read_file():
    """Read a file specified in the command line\n
    Returns:
        [String]: Returns all of the text in the file
    """

    # filename of py
    # <
    # filename of data
    print(sys.argv)
    print("test")    
    lines = []
    while True:
        try:
            text = input()
            lines.append(text)
            # line_count += 1
            # print(text)
        except EOFError:
            break
    
    return "".join(lines)

    

a = read_file()
print(a)