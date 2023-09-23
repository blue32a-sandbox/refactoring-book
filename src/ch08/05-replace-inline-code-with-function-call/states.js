const states = [];
states.push("MA");

let appliesToMass = false;
for(const s of states) {
    if (s === "MA") appliesToMass = true;
}

console.log(appliesToMass);
