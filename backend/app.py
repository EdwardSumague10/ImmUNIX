import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Allow your frontend to communicate with this backend
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}}) # Adjust port to match your frontend (e.g., 3000 or 5173)

def send_email(name, email, message):
    sender_email = os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASS")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    # Create the email structure
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"New Contact Form Submission from {name}"

    body = f"You received a new message from your portfolio contact form:\n\n" \
           f"Name: {name}\n" \
           f"Email: {email}\n\n" \
           f"Message:\n{message}"
    
    msg.attach(MIMEText(body, 'plain'))

    # Connect to Gmail's SMTP server
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls() # Secure the connection
        server.login(sender_email, sender_password)
        server.send_mail(sender_email, receiver_email, msg.as_string())

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    
    # Validation
    if not data or not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        send_email(data['name'], data['email'], data['message'])
        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": "Failed to send email. Please try again later."}), 500

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(debug=True, port=port)