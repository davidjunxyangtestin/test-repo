import random

from random_project_data import ADJECTIVES, FEATURES, GOALS, NOUNS, TECH


def generate_project():
    return {
        "name": f"{random.choice(ADJECTIVES)} {random.choice(NOUNS)}",
        "goal": random.choice(GOALS),
        "feature": random.choice(FEATURES),
        "tech": random.choice(TECH),
    }


def format_project(project):
    return "\n".join(
        [
            f"Project: {project['name']}",
            f"Goal: {project['goal']}",
            f"Feature: {project['feature']}",
            f"Suggested stack: {project['tech']}",
        ]
    )


if __name__ == "__main__":
    print(format_project(generate_project()))
