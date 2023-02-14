import random

with open('exercicio-dia/ex3/file.txt') as words:
    word_list = words.readlines()
    word_list.reverse()
    new_list = []
    first = True
    for word in word_list:
        if first:
            new_list.append(word)
            first = False
        else:
            word = word[:-1]
            new_list.append(word)
    print(new_list)

word = random.choice(new_list)
scrambled_word = "".join(random.sample(word, len(word)))
print(f'A palavra a ser adivinhada é {scrambled_word}')

guess = input('Escreva o seu paltite')
while guess != word:
    guess = input('Tente novamente!')
print('Você adivinhou a palavra!')