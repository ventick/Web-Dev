class Animal:
    def __init__(self, name, age, habitat):
        self.name = name
        self.age = age
        self.habitat = habitat

    def speak(self):
        return f"{self.name} makes a sound."

    def move(self):
        return f"{self.name} moves through the {self.habitat}."

    def describe(self):
        return f"{self.name} is {self.age} years old and lives in the {self.habitat}."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, habitat={self.habitat})"


class Dog(Animal):
    def __init__(self, name, age, habitat, breed):
        super().__init__(name, age, habitat)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} happily fetches the ball."

    def __str__(self):
        return (
            f"Dog(name={self.name}, age={self.age}, habitat={self.habitat}, "
            f"breed={self.breed})"
        )


class Cat(Animal):
    def __init__(self, name, age, habitat, color):
        super().__init__(name, age, habitat)
        self.color = color

    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} climbs onto a high shelf."

    def move(self):
        return f"{self.name} silently walks around the {self.habitat}."

    def __str__(self):
        return (
            f"Cat(name={self.name}, age={self.age}, habitat={self.habitat}, "
            f"color={self.color})"
        )
