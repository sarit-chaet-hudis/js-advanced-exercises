function findExponent(base, num) {
    if (num/base <= 1) {
        return 1;
    }
    
    return findExponent(base, num/base) + 1; //the plus one counts how many times the recursion has happened
}

console.log(findExponent(8,64));