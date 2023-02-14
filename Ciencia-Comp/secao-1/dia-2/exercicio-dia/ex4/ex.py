import json
import csv

with open('exercicio-dia/ex4/books.json') as books:
    book_list = json.load(books)
    total_books = len(book_list)
    categories = {}
    for book in book_list:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    percent = [[category, number / total_books ] for category, number in categories.items()]

with open('exercicio-dia/ex4/report.csv', 'w') as report:
    created = csv.writer(report)
    created.writerow(['categoria', 'porcentagem'])
    created.writerows(percent)