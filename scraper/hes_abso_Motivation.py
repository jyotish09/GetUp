import pyrebase, json, requests, isodate
from utils import pretty_print_json, youtube_list_videos, videoDetails, printDetails, pushHESVidDetails, pushABSVidDetails

def allVideoId(pageToken,data):
    resp = data if data else youtube_list_videos('','UCpmZQGTZXn9xd4nN59pbIWQ')

    print("\n Calling allVideoId fn() : "+pageToken+"\n")

    for i in resp["items"]:
        if 'videoId' in i["id"]:
            dataVid = videoDetails(i["id"]["videoId"])
            dur = isodate.parse_duration(dataVid["items"][0]["contentDetails"]["duration"]).total_seconds()
            flag = False

            if  dur <= 599 :
                # print(" <= PT9M59S")
                flag = True
            if  750 > dur > 599 :
                # print(" PT10M00S - PT12M30S")
                flag = True
            # if  750 <= dur :
            #     print(" Too Long")

            if flag :
                printDetails(
                i["id"]["videoId"],
                i["snippet"]["title"],
                dataVid["items"][0]["contentDetails"]["duration"],
                dur)
                # HESMotivation FDB
                # pushHESVidDetails(
                # i["id"]["videoId"],
                # i["snippet"]["title"],
                # dataVid["items"][0]["contentDetails"]["duration"],
                # dur)
                # AbsoluteMotivation to FDB
                # pushABSVidDetails(
                # i["id"]["videoId"],
                # i["snippet"]["title"],
                # dataVid["items"][0]["contentDetails"]["duration"],
                # dur)


data = youtube_list_videos('','UCpmZQGTZXn9xd4nN59pbIWQ')
print("First Page")
allVideoId('',None)

if 'nextPageToken' in data:
    # print('\nnextPageToken : ')
    # print(data["nextPageToken"])
    allVideoId(data["nextPageToken"],data)

print("\n Checking Remaining Pages \n")
while 'nextPageToken' in data:
    data = youtube_list_videos(data["nextPageToken"],'UCpmZQGTZXn9xd4nN59pbIWQ')
    if 'nextPageToken' in data:
        print('data["nextPageToken"]')
        print(data["nextPageToken"])
        allVideoId(data["nextPageToken"],data)

#    One Script To Rule Them All - Basically get all videos from any channel with a given channelId
#    UCpmZQGTZXn9xd4nN59pbIWQ - Absolute Motivation channelId
#    UC3gWv-0A3qEeFBJESlsJa0g - HESMotivation channelId
