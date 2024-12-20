function defangIPaddr(address: string): string {
    let newAddress = ""
    for(let i = 0; i< address.length; i ++) {
        newAddress += address[i] === "." ? "[.]" : address[i];
    }
    return newAddress;
};