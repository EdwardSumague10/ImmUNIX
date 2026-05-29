from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Allows your React app to talk to this API

# Point Flask directly to your brand new local PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/immunix'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Inquiry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)

    # This turns your data into a clean dictionary/JSON format later
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "message": self.message
        }

@app.route('/api/inquiries', methods=['POST'])
def create_inquiry():
    data = request.get_json()
    
    # Extract data from the incoming React request
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Validation check
    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400
        
    # Create a new row based on our database blueprint
    new_inquiry = Inquiry(name=name, email=email, message=message)
    
    try:
        db.session.add(new_inquiry) # Stage it
        db.session.commit()         # Save it permanently to Postgres!
        return jsonify({"message": "Inquiry submitted successfully!", "data": new_inquiry.to_dict()}), 201
    except Exception as e:
        db.session.rollback()       # Cancel if something breaks
        return jsonify({"error": str(e)}), 500

# This must be all the way against the left wall!
if __name__ == '__main__':
    # This line looks at your "Inquiry" model above and builds it in Postgres!
    with app.app_context():
        db.create_all()
        
    app.run(port=5001, debug=True)