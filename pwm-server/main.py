# -*- coding:utf-8 -*-

from bottle import route, run
import simplejson as json
from bottle import HTTPResponse
import time
import pigpio


@route('/on')
def hello():

    gpio_pin = 19

    print("@@@ Now, Outputting... @@@")

    gpio_pin = 19

    # duration1
    pi = pigpio.pi()
    pi.set_mode(gpio_pin, pigpio.OUTPUT)
    pi.hardware_PWM(gpio_pin, 200, 500000)
    time.sleep(2)
    pi.set_mode(gpio_pin, pigpio.INPUT)
    pi.stop()

    # interval
    # time.sleep(self.__interval_filter(self.interval))

    print("@@@ Done @@@")

    body = json.dumps({'status': 'switch on'})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    return r


@route('/off')
def hello():
    print("hello")
    body = json.dumps({'status': 'switch off'})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    return r


run(host='raspberrypi.local', port=8080, debug=True)
