from flask import Flask, jsonify

app = Flask(__name__)
books = [{'id': 1, 'title': 'Python Essentials', 'author': 'Jane Doe'}]

@app.route('/camera-list', methods=['GET'])
def get_books():
    return jsonify({'books': books})

if __name__ == '__main__':
    app.run()