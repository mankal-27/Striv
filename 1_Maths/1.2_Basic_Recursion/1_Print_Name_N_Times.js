function callMe(N, M) {
    if(N > M){
        console.log("Hello");
        N = N - 1;
        callMe(N, M);
    }
}

callMe(10,5);

module.exports = callMe;