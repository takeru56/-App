# -*- coding:utf-8 -*-

from bottle import route, run
import simplejson as json
from bottle import HTTPResponse
import RPi.GPIO as GPIO
import time

@route('/on')
def hello():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(25, GPIO.OUT) # GPIOを出力として使用する
    GPIO.output(25, GPIO.HIGH)

    body = json.dumps({'status': 'switch on'})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    return r

@route('/off')
def hello():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(25, GPIO.OUT) # GPIOを出力として使用する
    GPIO.output(25, GPIO.LOW)
    GPIO.cleanup()

    body = json.dumps({'status': 'switch off'})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    return r

run(host='raspberrypi.local', port=8080, debug=True)
