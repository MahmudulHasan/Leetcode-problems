function interpret(command: string): string {
    let finalString = "";
    for(let i = 0; i<command.length; i++) {
        if(command[i] === "G") {
            finalString += "G";
        }else if(command[i] === "(" && command[i+1] === ")") {
            finalString += "o";
        }else if(command[i] === "(" && command[i+1] === "a"){
            finalString += "al";
        }
    }
    return finalString;
};