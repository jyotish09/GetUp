import requests, urllib, re, os
from bs4 import BeautifulSoup as BS

session = requests.session()
pageURL = 'https://zenpencils.com/'
page = session.post(pageURL)
# print(page.text)
# Home Page details
# Finding total number of pages
homepage = BS(page.text,"html.parser").find('form',{'class':'comic-list-dropdown-form'})
# print(homepage)
pages = homepage.find_all('option',{'class':'level-0'})
print("\n  Finding Links \n ")

for i in pages:
    print(i.get_text())
    print(i['value'])
