import requests, urllib, re, os, json, pyrebase
from bs4 import BeautifulSoup as BS
import txt
# print(txt.user)
session = requests.session()
pageURL = 'https://zenpencils.com/'
page = session.post(pageURL)
# print(page.text)
# Home Page details
# Finding total number of pages
homepage = BS(page.text,"html.parser").find('form',{'class':'comic-list-dropdown-form'})
# print(homepage)
pages = homepage.find_all('option',{'class':'level-0'})
print("\n  Finding Links .... \n ")

for i in pages:
    print(json.dumps({'key':i.get_text(),'value':i['value']}))
    print(" Writing Links into FDB ....  ")
    txt.db.child("zenpencils").push({'key':i.get_text(),'value':i['value']}, txt.user['idToken'])
# print(json.dumps(data))
