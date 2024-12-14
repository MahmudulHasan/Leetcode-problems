function maximumWealth(accounts: number[][]): number {
    let richestCustomerWealth = 0;
    for(let i = 0; i < accounts.length; i++) {
        let customerWealth = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            customerWealth += accounts[i][j];
        }
    if(richestCustomerWealth < customerWealth) {
        richestCustomerWealth = customerWealth;
    }
    }
    return richestCustomerWealth;
};