from typing import Any

class FixedStack:
    class Empty(Exception):
        pass
    class Full(Exception):
        pass
    # 아직 여기는 뭔소린가... ㅎㅎ

    def __init__(self, capacity: int=256) -> None:
        self.stk = [None]*capacity
        self.capacity = capacity
        self.ptr = 0

    def __len__(self) -> int:
        return self.ptr

    def is_empty(self) -> bool:
        return self.ptr <= 0

    def is_full(self) -> bool:
        return self.ptr >=self.capacity
    
    def push(self, value: Any) -> None:
        if self.is_full():
            raise FixedStack.Full
        self.stk[self.ptr] = value
        self.ptr +=1
    
    def pop(self) -> Any:
        if self.is_empty():
            raise FixedStack.Empty
        
        self.ptr -= 1
        temp = self.stk[self.ptr]
        # self.stk[self.ptr] = None
        return temp

    def peek(self) -> Any:
        if self.is_empty():
            raise FixedStack.Empty
        return self.stk[self.ptr-1]

    def clear(self) -> None:
        self.ptr = 0
a = FixedStack(20)



a.push(30)
a.push(23)
a.push(33)
a.push(81)
a.push(31)
print(a.pop())
print(a.pop())
a.push(777)
print(a.stk)

