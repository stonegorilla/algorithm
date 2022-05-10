print('세 정수중 가장 큰값을 구하라')
a = int(input('정수 a의 값은?'))
b = int(input("정수 b의 값은?"))
c = int(input("정수 c의 값은?"))

maximum = a
if b>maximum : maximum =b
if c>maximum : maximum = c
print(f'가장 큰 수는:{maximum}') 