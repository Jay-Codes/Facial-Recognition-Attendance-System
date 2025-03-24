from flask import Flask, request, jsonify
import face_recognition
import cv2
import numpy as np
import io
from PIL import Image

app = Flask(__name__)

# Load known faces (same as face_recognition.py)
known_faces = [...]  
known_names = [...]  

@app.route("/recognize", methods=["POST"])
def recognize():
    file = request.files["image"].read()
    image = Image.open(io.BytesIO(file))
    frame = np.array(image)

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_faces, face_encoding)
        if True in matches:
            match_index = np.argmax(matches)
            return jsonify({"name": known_names[match_index]})

    return jsonify({"name": None})

if __name__ == "__main__":
    app.run(debug=True)
