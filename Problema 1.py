# Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la
# multiplicación de los mismos SIN usar el operador de multiplicación *.

def multiplicar(a, b):
    if b == 0:
        return 0 
    elif b == 1:
        return a
    else:
        return  a + multiplicar ( a, b - 1)


if __name__ == '__main__':
    a = int(input('Ingrese un numero : '))
    b = int(input('Ingrese otro numero : '))

    resultado = multiplicar(a , b)
    print (f'El resultado de la multiplicacion es : {resultado}')
