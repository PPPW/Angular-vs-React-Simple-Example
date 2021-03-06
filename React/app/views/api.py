from flask import Blueprint, send_from_directory, jsonify
import os

mod = Blueprint('api', __name__)

@mod.route('/', defaults={'path': ''})
@mod.route('/<path:path>')
def any_root_path(path):    
    if path == '':
        # for '/'
        return send_from_directory('static/react-app/build', 'index.html')
    if os.path.exists('app/static/react-app/build/' + path):
        # for existing static files
        return send_from_directory('static/react-app/build', path)
    else:
        # for nonexisting urls
        return send_from_directory('static/react-app/build', 'index.html')


@mod.route('/api/data')
def get_data():
    data = [
        {'Name': 'Mark', 'Role': 'Admin', 'Status': 'Active'},
        {'Name': 'Jacob', 'Role': 'Publisher', 'Status': 'Active'},
        {'Name': 'Paula', 'Role': 'Reviewer', 'Status': 'Active'},
        {'Name': 'Mary', 'Role': 'Reviewer', 'Status': 'Inactive'},
    ]
    return jsonify(data)
