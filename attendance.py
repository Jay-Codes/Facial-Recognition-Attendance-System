import csv
from datetime import datetime

ATTENDANCE_FILE = "attendance.csv"

def mark_attendance(name):
    now = datetime.now()
    time_str = now.strftime("%Y-%m-%d %H:%M:%S")

    with open(ATTENDANCE_FILE, "a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([name, time_str])

    print(f"Attendance marked for {name} at {time_str}")
