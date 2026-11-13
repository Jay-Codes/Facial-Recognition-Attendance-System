# Facial-Recognition-Attendance-System
Fundamentals of software Project:
# Facial Recognition-Based Attendance System

## 📌 Overview
This project aims to develop an **automated attendance system** using **facial recognition** to eliminate attendance fraud and improve efficiency in classrooms. The system allows lecturers to start an attendance session, and a camera at the classroom entrance verifies students' identities using facial biometric data.

## 🎯 Problem Statement
Traditional attendance systems are prone to:
- **Fraud** – Students can sign for absent classmates.
- **Time Consumption** – Manually taking attendance wastes valuable class time.
- **Inefficiency** – Paper-based or manual digital systems lack automation and real-time tracking.

## 💡 Solution
A **Facial Recognition-Based Attendance System** that:
✅ Uses biometric facial data to mark attendance automatically.  
✅ Provides a **lecturer dashboard** for session management and reporting.  
✅ **Eliminates fraud** by ensuring only present students are marked.  
✅ Generates attendance reports and integrates with school systems.  

---

## 🏗️ Development Methodology: Waterfall Model  
We follow the **Waterfall Software Development Lifecycle (SDLC)** to ensure a structured approach.

1️⃣ **Requirement Analysis** – Define system needs, user roles, and technical requirements.  
2️⃣ **System Design** – Plan architecture, database schema, UI wireframes.  
3️⃣ **Implementation** – Develop frontend, backend, AI model, and integrate components.  
4️⃣ **Testing** – Perform unit, integration, and security testing.  
5️⃣ **Deployment & Maintenance** – Deploy on a server, monitor performance, and update AI models periodically.  

---

## 🏛️ System Architecture  
The system consists of the following components:

- **Frontend** (React.js) – Lecturer Dashboard & Student Portal.  
- **Backend** (Node.js + Express) – Handles authentication, attendance sessions, and reporting.  
- **Database** (MongoDB) – Stores student data, attendance records, and lecturer details.  
- **Facial Recognition Module** (OpenCV & TensorFlow/Keras) – Detects and verifies student identities.  
- **Authentication** (OAuth + JWT) – Secure user login and session management.  

---

## 🛠️ Technologies Used  

### **Frontend (User Interface)**  
- **Framework:** React.js  
- **Styling:** Material UI (MUI)  
- **State Management:** React Context API / Redux  
- **Routing:** React Router  

### **Backend (API & Server)**  
- **Framework:** Node.js with Express.js  
- **Database:** MongoDB (NoSQL)  
- **Authentication:** OAuth 2.0, JWT (JSON Web Token)  
- **API Documentation:** Swagger / Postman  

### **Facial Recognition & AI**  
- **Computer Vision:** OpenCV  
- **Machine Learning Framework:** TensorFlow / Keras  
- **Face Embedding Model:** FaceNet or DeepFace  
- **Image Processing:** dlib  

### **Other Tools & Libraries**  
- **Real-time Communication:** WebSockets (Socket.io)  
- **Logging & Monitoring:** Winston / Morgan  
- **Deployment:** Docker & Nginx  
- **Version Control:** Git & GitHub  

---

## 📂 System Modules  

1️⃣ **Student Registration Module**  
   - Students upload a selfie or take a picture.  
   - AI model trains on the new facial data.  
   - Data is securely stored in MongoDB.  

2️⃣ **Facial Recognition & Attendance Module**  
   - Camera captures student faces at the classroom entrance.  
   - AI verifies student identity and marks attendance.  
   - Attendance status is stored in the database.  

3️⃣ **Lecturer Dashboard Module**  
   - Lecturers start and end attendance sessions.  
   - Real-time attendance monitoring.  
   - Generate attendance reports.  

4️⃣ **Admin Module**  
   - Manage users (students, lecturers).  
   - Update AI model and facial recognition data.  
   - Manage classroom schedules and venues.  

5️⃣ **Reporting & Integration Module**  
   - Generate attendance reports.  
   - Export data and integrate with school systems.

 📈 Data Flow Diagram (DFD)  
Below is the Data Flow Diagram (DFD) representing the system's data movement:
![image](https://github.com/user-attachments/assets/c086d662-4e71-4c21-835d-bcf3e0ba75fc)

Facial Recognition-Based Attendance System data flow diagram.
Data Flow Explanation.
 1. Student → Camera (Face Capture)
•	The student enters the classroom.
•	The camera captures the student's face.
 2. Camera → Facial Recognition (Verify & Match)
•	The facial recognition module checks if the captured face exists in the system.
 3. Facial Recognition → Attendance Processing (Mark Attendance)
•	If a match is found, the student is marked Present.
•	If no match, the student remains Absent (X).
 4. Attendance Processing → Database (Store Record)
•	The attendance record is saved in the database.
 5. Database → Lecturer (View Attendance)
•	The lecturer retrieves attendance records for monitoring.
 6. Lecturer → Attendance Report (Generate Reports)
•	The lecturer generates attendance reports.
 7. Attendance Report → School System (Sync Data)
•	The school system receives attendance data for official records.
8. Admin → Database (Manage System)
•	The admin manages users and updates attendance records.
9. Admin → Facial Recognition (Update AI Model)
•	The admin improves facial recognition accuracy by updating student images.

 


## 📈 Future Enhancements  
🚀 Mobile App for attendance tracking.  
🚀 AI-powered analytics for student participation.  
🚀 Multi-factor authentication for increased security.  
🚀 Expansion to workplace attendance and event check-ins.  

---

## 💻 Setup & Installation  

### **1. Clone the Repository**  
```bash
git clone https://github.com/your-username/attendance-system.git
cd attendance-system
