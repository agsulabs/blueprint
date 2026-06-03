"""
Projekt: Python Snake
Tag 2

Aufgabe:
Wir definieren erste Variablen für das spätere Snake-Spiel.
Heute gibt es noch keine Bewegung und keine Spiellogik.
"""

GAME_TITLE = "Python Snake"
PLAYER_NAME = "Gast"
START_X = 5
START_Y = 5


def main() -> None:
    """
    Startfunktion des Programms.
    Sie gibt einfache Informationen über das spätere Spiel aus.
    """

    print(GAME_TITLE)
    print("Spieler:", PLAYER_NAME)
    print("Startposition X:", START_X)
    print("Startposition Y:", START_Y)


if __name__ == "__main__":
    main()