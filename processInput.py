import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['POST'])
def process_data():
    data = request.get_json()
    variable1 = data['variable1']
    variable2 = data['variable2']

    # Process the data
    # ...

    # Return a response (optional)
    response_data = {"message": "Data received and processed successfully"}
    return jsonify(response_data)

if __name__ == '__scripting__':
    app.run()
__________________________
__________________________________________________________

#Start writing if else statements from here
ans1 = ''
ans2 = ''
ans3 = ''
ans4 = ''
ans5 = ''
#question 1


total_score = 0
if ans1 == 'A':
    total_score += 4
elif ans1 == 'B':
    total_score += 3
elif ans1 == 'C':
    total_score += 2
elif ans1 == 'D':
    total_score += 1

if ans2 == 'A':
    total_score += 3
elif ans2 == 'B':
    total_score += 2
elif ans2 == 'C':
    total_score += 1

if ans3 == 'A':
    total_score += 3
elif ans3 == 'B':
    total_score += 2
elif ans3 == 'C':
    total_score += 1

if ans4 == 'A':
    total_score += 4
elif ans4 == 'B':
    total_score += 3
elif ans4 == 'C':
    total_score += 2
elif ans4 == 'D':
    total_score += 1

if ans5 == 'A':
    total_score += 4
elif ans5 == 'B':
    total_score += 3
elif ans5 == 'C':
    total_score += 2
elif ans5 == 'D':
    total_score += 1
    