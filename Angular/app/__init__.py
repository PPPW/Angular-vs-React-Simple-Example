from flask import Flask
from .config import config

    
def create_app(config_name):
    app = Flask(__name__, static_folder='static/angular-app/dist')
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    
    from .views import api
    app.register_blueprint(api.mod)    
    
    return app
