#!/usr/bin/env python

from bs4 import BeautifulSoup as BS
import requests

#page = requests.get("https://www.brainyquote.com/topics/life")
#page = requests.get("https://www.brainyquote.com/quote_pictures")
page = requests.get("https://www.brainyquote.com/topics/age")
soup = BS(page.content, 'html.parser')
for img in soup.find_all('img', alt=True):
  print (img['alt'])
