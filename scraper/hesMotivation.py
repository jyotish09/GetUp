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
# print('params')
# print(params)
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)
# print("\n data \n")
# print(get_pretty_print(data))
if 'nextPageToken' in data:
    print('\nnextPageToken : ')
    print(data["nextPageToken"])
if 'prevPageToken' in data:
    print('\nprevPageToken : ')
    print(data["prevPageToken"])
print("\n Looping through items ...")

for i in data["items"]:
    if 'videoId' in i["id"]:
        print("\n")
        print(i["snippet"]["title"])
        paramsVid= dict(
        id=i["id"]["videoId"],
        part='contentDetails',
        key=txt.youtubeAPIKey
        )
        print('paramsVid')
        print(get_pretty_print(paramsVid))
        urlVid = 'https://www.googleapis.com/youtube/v3/videos'
        respVid = requests.get(url=urlVid, params=paramsVid)
        dataVid = json.loads(respVid.text)
        # print(get_pretty_print(dataVid))
        print(get_pretty_print(dataVid["items"][0]["contentDetails"]["duration"]))
