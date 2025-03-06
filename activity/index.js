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

  if (pokemonType === move.type) {
    damage *= stabDamage;
  }

  if (move.type === defender.weakness) {
    damage *= typeAdvantage;
  }
  return damage * attacker.attack;
}

function chooseMove(attacker, defender) {
  console.log(attacker.name);
  let moveOption = prompt(
    `Choose ${attacker.name}'s moves:\n 1: Attack\n 2: Run`
  );
  if (moveOption === "1") {
    let moveNumber = Math.floor(Math.random() * 2 + 1);
    let move = attacker.moves[moveNumber];
    let damage = calculateMoveDamage(attacker, move, defender);
    return damage;
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
        let message =
          "Pokemon has " + (secondPokemonHp > 0 ? "survived" : "fainted");
        console.log(message);
        console.log(secondPokemonHp);
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
        let message =
          "Pokemon has " + (firstPokemonHp > 0 ? "survived" : "fainted");
        console.log(message);
        console.log(firstPokemonHp);
      } else {
        console.log(`${secondPokemon.name} has run away from the battle.`);
        secondPokemonHp -= 500;
      }
    }
    console.log(`First Pokemon HP: ${firstPokemonHp}`);
    console.log(`Second Pokemon HP: ${secondPokemonHp}`);

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
