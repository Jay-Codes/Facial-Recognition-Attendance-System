import face_recognition
import cv2
import numpy as np
import os

# Load known face encodings
known_faces = []
known_names = []
dataset_path = "dataset/images/"

for file in os.listdir(dataset_path):
    img = face_recognition.load_image_file(os.path.join(dataset_path, file))
    encoding = face_recognition.face_encodings(img)
    
    if encoding:
        known_faces.append(encoding[0])
        known_names.append(file.split(".")[0])  # Name from filename

def recognize_faces(frame):
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_faces, face_encoding)
        name = "Unknown"

        if True in matches:
            match_index = np.argmax(matches)
            name = known_names[match_index]

        return name  # Return first recognized name
    return None
