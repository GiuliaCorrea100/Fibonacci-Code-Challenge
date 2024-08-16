function fibonacciGenerator (n) {
    if(n === 1) {
        return [0];
    }
    else if(n === 2) {
        return [0, 1];
    }
    else if(n > 2) {
        var output = [0, 1];
        for(var i=2; i<=n; i++) {
            var nextNumber = output[i-1] + output[i-2];
            output.push(nextNumber);
        }
        return output;
    }
}