import cv2
from src.face_recognition import recognize_faces
from src.attendance import mark_attendance

def main():
    cap = cv2.VideoCapture(0)  # Open webcam
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        name = recognize_faces(frame)  # Recognize face
        if name:
            mark_attendance(name)  # Mark attendance
        
        cv2.imshow("Attendance System", frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
