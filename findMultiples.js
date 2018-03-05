function findMultiples(integer, limit) {
    return Array(parseInt(limit / integer)).fill(integer).map((val, index) => { return val * (index + 1) })
}