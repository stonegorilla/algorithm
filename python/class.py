# self는 그냥 파이썬에서 제공해 주는 것이라고 하자 ㅎㅎ 
# 그냥 def __init__ (self ...) 이런식으로 쓰라고 하는 것임 ㅎㅎ 
# self의 철학적 의미는 약간 java의 this 하고 비슷하다. 
class SomeClass:
    def __init__(self,something):
        self.something = something

    def some_function(self):
        print(self.something)

a = SomeClass("앙제발유")

a.some_function()
