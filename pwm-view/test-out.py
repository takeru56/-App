#

#!/usr/bin/python
# -*- coding: utf-8 -*-

import pigpio
gpio_pin = 19
hz1 = 200 
hz2 = 200 
duration1 = 0.01
duration2 = 0.01

pi = pigpio.pi()
pi.set_mode(gpio_pin, pigpio.OUTPUT)
pi.hardware_PWM(gpio_pin, hz1, 500000)
time.sleep(duration1)
pi.set_mode(gpio_pin, pigpio.INPUT)
pi.stop()

# interval
time.sleep(0.01)

# duration2
pi = pigpio.pi()
pi.set_mode(gpio_pin, pigpio.OUTPUT)
pi.hardware_PWM(gpio_pin, hz2, 500000)
time.sleep(duration2)
pi.set_mode(gpio_pin, pigpio.INPUT)
pi.stop()


