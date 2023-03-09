# Com o Beautiful Soup, faça a extração de todos os links da página “https://pt.wikipedia.org/wiki/Rock_in_Rio”

import requests
from bs4 import BeautifulSoup

page = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")
html_page = page.text

soup = BeautifulSoup(html_page, "html.parser")

all_links = soup.find_all('a')

for link in all_links:
    print(link.text)