# -*- coding: utf-8 - *-
import bottle
import jinja2
import simplejson as json
from raspberry import pulse_wave
from bottle import HTTPResponse
from bottle import route, run, static_file
from bottle import request, get
from bottle import TEMPLATE_PATH, jinja2_template as template

TEMPLATE_PATH.append("./views")


@route('/')
def top():
    return template('top.j2', name="takeru3")


@route('/output')
def output():
    params = request.query
    inv = params.get('interval');  #inverval
    hz1 = params.get('hz1')        #Hz1
    hz2 = params.get('hz2')        #Hz2
    dur1 = params.get('duration1') #duration1
    dur2 = params.get('duration2') #duration2

    
    print("=== parameter ===");
    print("interval:", inv);
    print("Hz1:", hz1);
    print("Hz2:", hz2);
    print("Duration1:", dur1);
    print("Duration2:", dur2);
    print("=================")

    pulse = pulse_wave(inv, hz1, hz2, dur1, dur2)
    pulse.output()

    body = json.dumps({'status': 'output'})
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    return r


@route('/assets/top.css')
def send_css():
    return static_file('top.css', root='assets')


@route('/assets/bulma.css')
def send_css():
    return static_file('bulma.css', root='assets')


@route('/assets/top.js')
def send_js():
    return static_file('top.js', root='assets')


@route('/assets/pulse.png')
def send_image():
    return static_file('pulse.png', root='assets')


run(host='localhost', port=8080, debug=True)
