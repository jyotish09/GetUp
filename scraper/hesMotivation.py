import pyrebase, json, requests, isodate
import txt

def pretty_print_json(json_object):
    return json.dumps(json_object, sort_keys=True, indent=4, separators=(',', ': '))

def youtube_list_videos(pageToken):
    url = 'https://www.googleapis.com/youtube/v3/search'
    params = dict(
        order='date',
        pageToken=pageToken,
        part='snippet',
        channelId='UC3gWv-0A3qEeFBJESlsJa0g',
        maxResults=50,
        key=txt.youtubeAPIKey
    )
    # print('params')
    # print(params)
    resp = requests.get(url=url, params=params)
    return json.loads(resp.text)

def videoDetails(id):
    urlVid = 'https://www.googleapis.com/youtube/v3/videos'
    paramsVid= dict(
    id=id,
    part='contentDetails',
    key=txt.youtubeAPIKey
    )
    respVid = requests.get(url=urlVid, params=paramsVid)
    return json.loads(respVid.text)

data = youtube_list_videos('CMgBEAA')
# print("\n data \n")
# print(pretty_print_json(data))
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
        print(pretty_print_json(i["id"]["videoId"]))

        dataVid = videoDetails(i["id"]["videoId"])
        # print(pretty_print_json(dataVid))
        print(pretty_print_json(dataVid["items"][0]["contentDetails"]["duration"]))
        dur=isodate.parse_duration(dataVid["items"][0]["contentDetails"]["duration"]).total_seconds()
        print(dur)

        if  dur <= 599 :
            print("<=PT9M59S")
        if  750 > dur > 599 :
            print("PT12M30S  -  PT10M00S")
        if  750 <= dur :
            print("Too Long")
