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

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/p_privacy')
def privacy():
    return render_template('p_privacy.html')

@app.route('/useterms')
def useterms():
    return render_template('useterms.html')



if __name__ == "__main__":    
    app.run(debug=True)