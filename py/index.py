name = "Old"

def look(name):
    
    def create():
        print(name)    

    return create


test = look()
test()


