# yahoo.py - Yahoo!ニュースの検索結果をいくつか開く

import requests, sys, webbrowser, bs4

print('Loading...')
res = requests.get(
    'https://news.yahoo.co.jp/search/?ei=utf-8&fr=news_sw&p=' + ''.join(sys.argv[1:]))
try:
    res.raise_for_status()
except Exception as exc:
    print('問題あり: {0}' .format(exc))

soup = bs4.BeautifulSoup(res.text, "lxml")
link_elems = soup.select('.t a')

num_open = min(3, len(link_elems))
for i in range(num_open):
    webbrowser.open(link_elems[i].get('href'))
