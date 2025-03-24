const video = document.getElementById("video");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

// Start the webcam stream
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing webcam: ", error);
    }
}

// Capture a frame and send it to the backend
async function captureFrame() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("image", blob, "frame.jpg");

        try {
            const response = await fetch("/recognize", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.name) {
                document.getElementById("result").innerText = `Recognized: ${data.name}`;
            } else {
                document.getElementById("result").innerText = "No match found.";
            }
        } catch (error) {
            console.error("Error sending frame: ", error);
        }
    }, "image/jpeg");
}

// Capture frames at intervals
setInterval(captureFrame, 3000);

// Start the camera when the page loads
window.onload = startCamera;
