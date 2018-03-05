function firstNonConsecutive(arr) {
    var val = arr.filter((element, index, arr) => { return (element) !== (arr[index - 1] + 1) })[1]
    return val === undefined ? null : val
}