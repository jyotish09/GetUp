import requests, urllib, re, os, json, pyrebase
from bs4 import BeautifulSoup as BS
import txt
# print(txt.user)
session = requests.session()
pageURL = 'https://zenpencils.com/'
page = session.post(pageURL)
# print(page.text)
