import requests
import re
from parsel import Selector

BASE_URL = 'http://books.toscrape.com/catalogue/'

response = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')
selector = Selector(text=response.text)

title = selector.css('div.product_main h1::text').get()
price = selector.css('div.product_main p.price_color::text').get()
desc = selector.css('article.product_page > p::text').get()
img_url = BASE_URL + selector.css('div.active > img::attr(src)').get()
avaiable_quant = selector.css('div.product_main > p.instock::text').getall()
digit = 0

for string in avaiable_quant:
    numbers = re.findall(r'\b\d+\b', string)
    if len(numbers) > 0:
        digit = numbers[0]

if desc.endswith('...more'):
    desc = desc[: -len(' ...more')]

print(f'{title}, {price[2:]}, {desc}, {img_url}, {digit}')