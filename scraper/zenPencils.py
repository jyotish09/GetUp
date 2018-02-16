import requests, urllib, re, os, json, pyrebase
from bs4 import BeautifulSoup as BS
import txt
print(txt.user)
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
data = {}
for i in pages:
    data[i.get_text()] = i['value']
print(data)
