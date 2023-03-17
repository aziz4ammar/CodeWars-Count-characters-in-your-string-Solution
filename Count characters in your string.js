function count(string) {
    let cat={};
    string.split('').map(s=>cat[s]=cat[s]+1||1)
    return cat;
}