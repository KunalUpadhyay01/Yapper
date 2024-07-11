import random
import time

class Bike:
    def __init__(self, name):
        self.name = name
        self.position = 0
        self.speed = 0

    def accelerate(self):
        self.speed += random.randint(2, 5)

    def decelerate(self):
        self.speed -= random.randint(1, 3)
        if self.speed < 0:
            self.speed = 0

    def move(self):
        self.position += self.speed

    def status(self):
        return f"{self.name} is at position {self.position} with speed {self.speed}"

def race():
    player = Bike("Player")
    computer = Bike("Computer")
    finish_line = 100

    print("Welcome to the Motorbike Racing Game!")
    print("Reach the finish line (position 100) before the computer to win.")
    print("You can accelerate or decelerate each turn.")
    print("Type 'a' to accelerate, 'd' to decelerate, or 'q' to quit.")

    while player.position < finish_line and computer.position < finish_line:
        command = input("Your turn (a/d/q): ").strip().lower()
        
        if command == 'a':
            player.accelerate()
        elif command == 'd':
            player.decelerate()
        elif command == 'q':
            print("You quit the game.")
            return
        else:
            print("Invalid command. Please type 'a', 'd', or 'q'.")
            continue

        computer.accelerate() if random.choice([True, False]) else computer.decelerate()

        player.move()
        computer.move()

        print(player.status())
        print(computer.status())

        if player.position >= finish_line:
            print("Congratulations! You won the race!")
            break
        elif computer.position >= finish_line:
            print("You lost the race. Better luck next time!")
            break

        time.sleep(1)

if __name__ == "__main__":
    race()
