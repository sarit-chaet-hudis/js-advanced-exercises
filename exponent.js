function findExponent(base, num) {
    if (num/base <= 1) {
        return 1;
    }
    
    return findExponent(base, num/base) + 1;
}

console.log(findExponent(8,64));