import pyrebase, json, requests, isodate
import txt

def pretty_print_json(json_object):
    return json.dumps(json_object, sort_keys=True, indent=4, separators=(',', ': '))

def youtube_list_videos(pageToken,channelId):
    url = 'https://www.googleapis.com/youtube/v3/search'
    params = dict(
        order='date',
        pageToken=pageToken,
        part='snippet',
        channelId=channelId,
        maxResults=50,
        key=txt.youtubeAPIKey
    )
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

def printDetails(id,snippet,ptm,dur):
    print("\n videoId : "+id+"\n")
    print(" "+snippet).encode('utf-8').strip()
    print(" "+ptm)
    print(dur)

def pushHESVidDetails(id,snippet,ptm,dur):
    print(" Pushing Data : " + id + " into FDB")
    txt.db.child("hesMotivation").push({'id':id,'clipName':snippet,'ptm':ptm,'dur':dur}, txt.user['idToken'])

def pushABSVidDetails(id,snippet,ptm,dur):
    print(" Pushing Data : " + id + " into FDB")
    txt.db.child("absoluteMotivation").push({'id':id,'clipName':snippet,'ptm':ptm,'dur':dur}, txt.user['idToken'])
