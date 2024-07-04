from flask import Flask, render_template, request, redirect, url_for, session ,jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
 
 
app = Flask(__name__)
 
 
app.secret_key = 'your secret key'
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your password'
app.config['MYSQL_DB'] = 'reviewsdb'
 
mysql = MySQL(app)
 
@app.route('/')
@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, review, rating FROM reviews")
    data = cursor.fetchall()
    reviews = [{'id': r[0], 'name': r[1], 'review': r[2], 'rating': r[3]} for r in data]
    cursor.close()
    conn.close()
    return jsonify(reviews)

@app.route('/api/reviews', methods=['POST'])
def add_review():
    data = request.get_json()
    name = data['name']
    review = data['review']
    rating = data['rating']
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO reviews (name, review, rating) VALUES (%s, %s, %s)", (name, review, rating))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Review added successfully'}), 201