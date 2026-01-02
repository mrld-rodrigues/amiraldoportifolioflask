# conding: utf-8

from flask import Flask, flash, render_template, redirect, request, send_from_directory, url_for
import requests
import os
from dotenv import load_dotenv
from control.email_function import Contato, send_email


# inicia o dotenv
load_dotenv()


# Configura a chave secreta do Flask
app = Flask(__name__)
secret_key = os.getenv('SECRET_KEY')
app.secret_key = secret_key



@app.route('/')
def index():    
    return render_template('index.html')



if __name__ == "__main__":    
    app.run(debug=True)