import pyrebase, json, requests
import txt

def get_pretty_print(json_object):
    return json.dumps(json_object, sort_keys=True, indent=4, separators=(',', ': '))

url = 'https://www.googleapis.com/youtube/v3/search'

params = dict(
    order='date',
    pageToken='CMgBEAA',
    part='snippet',
    channelId='UC3gWv-0A3qEeFBJESlsJa0g',
    maxResults=50,
    key=txt.youtubeAPIKey
)
print('params')
print(params)
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)
# print("\n data \n")
# print(get_pretty_print(data))
if 'nextPageToken' in data:
    print('\n data["nextPageToken"] \n')
    print(data["nextPageToken"])
if 'prevPageToken' in data:
    print('\n data["prevPageToken"] \n')
    print(data["prevPageToken"])
print("\n Looping through items ... \n")

for i in data["items"]:
    print("\n")
    print(get_pretty_print(i))
