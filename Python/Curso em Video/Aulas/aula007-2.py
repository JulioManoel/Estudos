n1 = int(input('Um valor: '))
n2 = int(input('Outro valor: '))
s = n1+n2
m = n1*n2
d = n1/n2
di = n1//n2
e = n1**n2
print('A soma deles é {} \n a multiplicação é {} a \n divição é {:.4f}'.format(s, m, d), end=' >>> ')
print('A divição inteira é {} a elevação é {}'.format(di, e))