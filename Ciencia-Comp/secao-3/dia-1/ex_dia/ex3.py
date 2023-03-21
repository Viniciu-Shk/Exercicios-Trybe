import requests

response = requests.get(
    'https://scrapethissite.com/pages/advanced/?gotcha=headers',
    headers={"User_agent": "Mozilla", "Accept": "text/html"},
    )
assert 'bot detected' not in response.text
print(response.status_code)
print(response.text)