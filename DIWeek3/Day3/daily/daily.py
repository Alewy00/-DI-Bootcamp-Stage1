from math import pi
class Circle:

    def __init__(self, rad = 0, di = 0) :
        if(rad != 0):
            self.di = rad * 2 
        if(di != 0):
            self.rad = di / 2 
        Circle.circles.append(self)

    def getArea(self):
        area = self.rad ** 2 * pi

    def __str__(self):
        return f"the circle has a radius of {self.rad} and a diameter of {self.di}"
    
    def __add__(self, other):
        return Circle(radius = self.rad + other.rad)

    def __gt__(self, other):
        return self.rad > other.rad
    
    def __eq__(self, other):
        return self.rad == other.rad
    
    @staticmethod
    def getRad(cls):
        return cls.rad
    
    @classmethod
    def sort(cls):
        return sorted(cls.circles, key= cls.getRad())

    