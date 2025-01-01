function convertDateToBinary(date: string): string {
    let datearr = date.split("-");
    let binary = datearr.map(ele => Number(ele).toString(2));
    return binary.join('-');
};