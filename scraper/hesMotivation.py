import pyrebase, json, requests, isodate
import txt
from utils import pretty_print_json, youtube_list_videos, videoDetails, printDetails

def allVideoId(pageToken,data):
    resp = data if data else youtube_list_videos('','UC3gWv-0A3qEeFBJESlsJa0g')

    print("\n Calling allVideoId fn() : "+pageToken+"\n")

    for i in resp["items"]:
        if 'videoId' in i["id"]:
            dataVid = videoDetails(i["id"]["videoId"])
            dur = isodate.parse_duration(dataVid["items"][0]["contentDetails"]["duration"]).total_seconds()

            printDetails(
            i["id"]["videoId"],
            i["snippet"]["title"],
            dataVid["items"][0]["contentDetails"]["duration"],
            dur)

            if  dur <= 599 :
                print(" <= PT9M59S")
            if  750 > dur > 599 :
                print(" PT10M00S - PT12M30S")
            if  750 <= dur :
                print(" Too Long")


data = youtube_list_videos('','UC3gWv-0A3qEeFBJESlsJa0g')
print("First Page")
allVideoId('',None)

if 'nextPageToken' in data:
    # print('\nnextPageToken : ')
    # print(data["nextPageToken"])
    allVideoId(data["nextPageToken"],data)

print("\n Checking Remaining Pages \n")
while 'nextPageToken' in data:
    data = youtube_list_videos(data["nextPageToken"],'UC3gWv-0A3qEeFBJESlsJa0g')
    if 'nextPageToken' in data:
        print('data["nextPageToken"]')
        print(data["nextPageToken"])
        allVideoId(data["nextPageToken"],data)
