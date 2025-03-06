console.log("Pokemon Battle");

let petalDance = {
  name: "Petal Dance",
  type: "Grass",
  damage: 90,
};

let vineWhip = {
  name: "Vine Whip",
  type: "Grass",
  damage: 50,
};

let flamethrower = {
  name: "Flamethrower",
  type: "Fire",
  damage: 90,
};

let ember = {
  name: "Ember",
  type: "Fire",
  damage: 50,
};

let hydroPump = {
  name: "Hydro Pump",
  type: "Water",
  damage: 90,
};

let waterGun = {
  name: "Water Gun",
  type: "Water",
  damage: 50,
};

let scratch = {
  name: "Scratch",
  type: "Normal",
  damage: 40,
};

let venusaur = {
  name: "Venusaur",
  type: "Grass",
  hp: 500,
  attack: 80,
  defense: 100,
  weakness: "Fire",
  strength: "Water",
  moves: [petalDance, vineWhip, scratch],
};

let charizard = {
  name: "Charizard",
  type: "Fire",
  hp: 500,
  attack: 100,
  defense: 80,
  weakness: "Water",
  strength: "Grass",
  moves: [flamethrower, ember, scratch],
};

let blastoise = {
  name: "Blastoise",
  type: "Water",
  hp: 500,
  attack: 90,
  defense: 90,
  weakness: "Grass",
  strength: "Fire",
  moves: [hydroPump, waterGun, scratch],
};
let firstPokemon = {};
let secondPokemon = {};

function chooseFirstPokemon() {
  let pokemon1;
  while (true) {
    try {
      pokemon1 = prompt(
        "Choose First Pokemon:\n 1: Venusaur\n 2: Charizard \n 3: Blastoise"
      );
      if (pokemon1 === "1") {
        firstPokemon = venusaur;
        break;
      } else if (pokemon1 === "2") {
        firstPokemon = charizard;
        break;
      } else if (pokemon1 === "3") {
        firstPokemon = blastoise;
        break;
      } else {
        throw new Error("Invalid choice. Please choose 1, 2, or 3.");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

chooseFirstPokemon();

function chooseSecondPokemon() {
  let pokemon2;
  while (true) {
    try {
      pokemon2 = prompt(
        "Choose Second Pokemon:\n 1: Venusaur\n 2: Charizard \n 3: Blastoise"
      );
      if (pokemon2 === "1") {
        secondPokemon = venusaur;
        break;
      } else if (pokemon2 === "2") {
        secondPokemon = charizard;
        break;
      } else if (pokemon2 === "3") {
        secondPokemon = blastoise;
        break;
      } else {
        throw new Error("Invalid choice. Please choose 1, 2, or 3.");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

chooseSecondPokemon();

let stabDamage = 1.5;
let typeAdvantage = 2;
console.log(firstPokemon);

function calculateMoveDamage(attacker, move, defender) {
  let pokemonType = attacker.type;
  let damage = move.damage;
  let totalDamage = damage;
  if (pokemonType === move.type) {
    let stab = damage * stabDamage;
    totalDamage += stab;
  }

  if (move.type === defender.weakness) {
    let typeEffective = damage * typeAdvantage;
    totalDamage += typeEffective;
    console.log(`${move.name} is very effective to ${defender.name}`);
  }

  if (move.type === defender.strength) {
    let notEffective = damage / typeAdvantage;
    totalDamage -= notEffective;
    console.log(`${move.name} is not very effective to ${defender.name}`);
  }
  return totalDamage * attacker.attack;
}

function chooseMove(attacker, defender) {
  console.log(attacker.name);
  let moveOption = prompt(
    `Choose ${attacker.name}'s Option:\n 1: Attack\n Any: Run`
  );
  if (moveOption === "1") {
    while (true) {
      try {
        let moveNumber = prompt(
          `Choose ${attacker.name}'s moves:\n 1: ${attacker.moves[0].name} Type:  ${attacker.moves[0].type} Damage:${attacker.moves[0].damage}  \n 2: ${attacker.moves[1].name} Type:  ${attacker.moves[1].type} Damage:${attacker.moves[1].damage}  \n 3: ${attacker.moves[2].name} Type:  ${attacker.moves[2].type} Damage:${attacker.moves[2].damage}  `
        );
        if (moveNumber === "1" || moveNumber === "2" || moveNumber === "3") {
          console.log(moveNumber);

          let damage = calculateMoveDamage(
            attacker,
            attacker.moves[moveNumber],
            defender
          );
          return damage;
        } else {
          throw new Error("Invalid choice. Please choose 1, 2, or 3.");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  } else {
    return 0;
  }
}

try {
  let turns = 1;
  let firstPokemonHp = firstPokemon.hp;
  let secondPokemonHp = secondPokemon.hp;
  let hasWinner = false;

  while (!hasWinner) {
    let pokemonTurn = turns % 2;
    if (pokemonTurn !== 0) {
      console.log("First Pokemon Turn");
      console.log(`${firstPokemon.name} is attacking`);

      let pokemonMove = chooseMove(firstPokemon, secondPokemon);
      if (pokemonMove !== 0) {
        let minusDamage = pokemonMove / secondPokemon.defense;
        secondPokemonHp -= minusDamage;
        console.log(`${secondPokemon.name}'s HP: ${secondPokemonHp}`);

        let message =
          `${secondPokemon.name} has ` +
          (secondPokemonHp > 0 ? "survived" : "fainted");
        console.log(message);
        if (secondPokemonHp <= 0) {
          declareWinner(firstPokemon);
          hasWinner = true;
        }
      } else {
        console.log(`${firstPokemon.name} has run away from the battle.`);
        firstPokemonHp -= 500;
      }
    } else {
      console.log("Second Pokemon Turn");
      console.log(`${secondPokemon.name} is attacking`);
      let pokemonMove = chooseMove(secondPokemon, firstPokemon);
      if (pokemonMove !== 0) {
        let minusDamage = pokemonMove / firstPokemon.defense;
        firstPokemonHp -= minusDamage;
        console.log(`${firstPokemon.name}'s HP: ${firstPokemonHp}`);

        let message =
          `${firstPokemon.name} has ` +
          (firstPokemonHp > 0 ? "survived" : "fainted");
        console.log(message);

        if (firstPokemonHp <= 0) {
          declareWinner(secondPokemon);
          hasWinner = true;
        }
      } else {
        console.log(`${secondPokemon.name} has run away from the battle.`);
        declareWinner(firstPokemon);
        hasWinner = true;
      }
    }

    if (firstPokemonHp <= 0) {
      declareWinner(secondPokemon);
      hasWinner = true;
    }

    if (secondPokemonHp <= 0) {
      declareWinner(firstPokemon);
      hasWinner = true;
    }

    turns++;
  }

  function declareWinner(pokemon) {
    console.log(`${pokemon.name} has won the battle!`);
  }
} catch (error) {
  console.log("An unexpected error occurred: " + error.message);
}
