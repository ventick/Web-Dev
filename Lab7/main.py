from models import Animal, Cat, Dog


def main():
    animals = [
        Animal("Parrot", 2, "rainforest"),
        Dog("Buddy", 4, "house", "Golden Retriever"),
        Cat("Luna", 3, "apartment", "gray"),
    ]

    print("Animal Objects:\n")

    for animal in animals:
        print(animal)
        print(animal.describe())
        print(animal.speak())
        print(animal.move())

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())

        print("-" * 40)


if __name__ == "__main__":
    main()
