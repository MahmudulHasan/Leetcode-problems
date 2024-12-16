function finalValueAfterOperations(operations: string[]): number {
    let value = 0;
    operations.forEach(function(operation, i) {
        if(operations[i] == "X++" || operations[i] == "++X") {
            value++;
        }else{
            value--;
        }
    });
    return value;
};