#coding: utf-8
__author__ = "Lauro César de Oliveira"
from flask import Flask, render_template, request, session, redirect, url_for, make_response, current_app , jsonify
from flask_cors import CORS, cross_origin
from json import *
from pprint import pprint

# Sample Data
car =	{
  "brand": "Ford",
  "model": "Mustango",
  "year": 1964
}

# Settings
app = Flask(__name__)
# retire the next line when set of production 
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# ROUTE FOR GET DATA SAMPLE
@app.route("/data",methods=['GET'])
def retorno():
    return jsonify(car)

# ROUTE FOR POST PRINT DATA
@app.route("/send",methods=['POST','GET'])
def send():
  # pprint(request.__dict__)
  print(request.form)
  pprint(request.__dict__)
  print(request.get_json())
  #request.form["sexo"] == "masculino" ? print("VOce é home") : print("VOce nao é home")
  #print("Voce é home " if request.form["sexo"] == "masculino" else "voce é mulher"  )
  #print(request.args)
  #print(car)
  status = {"status": "ok"}
  return jsonify(status)
@app.route("/getjson",methods=['POST'])
def getter():
    resultado = request.get_json();
    pprint(resultado)
    pprint(resultado['data']['id'])    

    # pprint(request.__dict__)
    pprint(request.get_json(silent=True))
    return jsonify({"status": True})

if __name__ == "__main__":
  app.run(host='127.0.0.1', port='8001', debug=True)

