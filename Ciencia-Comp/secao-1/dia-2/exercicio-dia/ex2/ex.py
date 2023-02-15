import random

word = random.choice(["word1", "word2", "word3"])
scrambled_word = "".join(random.sample(word, len(word)))
print(f'A palavra a ser adivinhada é {scrambled_word}')

guess = input('Escreva o seu paltite')
while guess != word:
    guess = input('Tente novamente!')
print('Você adivinhou a palavra!')