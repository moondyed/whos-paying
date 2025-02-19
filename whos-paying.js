function whosPaying(names) {
    let randomNumber = Math.floor(Math.random() * names.length);
    let randomPerson = names[randomNumber];
    return randomPerson + " is paying today!";
}

whosPaying([//names with ""])
