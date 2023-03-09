#  Imprima todos os parágrafos da página “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/".

from selenium import webdriver
from time import sleep

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

firefox = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)

response = firefox.get('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')

p_elements = firefox.find_elements('tag name', 'p')

for p in p_elements:
    print(p.text)

sleep(3)

firefox.quit()  
