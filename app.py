from flask import Flask, Response,send_file,jsonify
from flask_cors import CORS
import os
app = Flask(__name__)

CORS(app)
def getVideoList(): 
    dir = './static/resources'
    videolist = os.listdir(dir)
    return videolist

@app.route("/call")
def main():
    videolist = getVideoList()
    data = []
   
    for item in videolist:
        data.append({
            'id': videolist.index(item)+1,
            'name': item,
            'link': f'/video/{item}'
        })
    
    return jsonify(data)

@app.route("/video/<videoname>")
def mainvideo(videoname):
    filename = f'static/resources/{videoname}'
    try:
        return send_file(filename)
    except:
        return {}