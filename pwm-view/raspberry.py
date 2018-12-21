# -*- coding: utf-8 -*-
import pigpio
import time


class pulse_wave:
    def __init__(self, inv, hz1, hz2, dur1, dur2):
        self.interval = int(inv) * 0.001
        self.hz1 = int(hz1)
        self.hz2 = int(hz2)
        self.duration1 = int(dur1) * 0.001
        self.duration2 = int(dur2) * 0.001

    def output(self):
        print("@@@ Now, Outputting... @@@")

        gpio_pin = 19

        # duration1
        pi = pigpio.pi()
        pi.set_mode(gpio_pin, pigpio.OUTPUT)
        pi.hardware_PWM(gpio_pin, self.hz1, 500000)
        time.sleep(self.duration1)
        pi.set_mode(gpio_pin, pigpio.INPUT)
        pi.stop()

        # interval
        time.sleep(self.__interval_filter(self.interval))

        # duration2
        pi = pigpio.pi()
        pi.set_mode(gpio_pin, pigpio.OUTPUT)
        pi.hardware_PWM(gpio_pin, self.hz2, 500000)
        time.sleep(self.duration2)
        pi.set_mode(gpio_pin, pigpio.INPUT)
        pi.stop()

        print("@@@ Done @@@")

    # tweak interval
    def __interval_filter(self, interval):
        if interval > 0.02:
            return interval
        elif interval <= 0.02 and interval > 0.01:
            return interval - 0.002
        elif interval <= 0.01 and interval > 0.004:
            return interval - 0.003
