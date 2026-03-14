function printReversePascal(rows) {
   
    for (let n = rows; n >= 0; n--) {
        let rowOutput = "";
        let val = 1; 

        for (let k = 0; k <= n; k++) {
            rowOutput += val + " ";
          
           
            val = val * (n - k) / (k + 1);
        }
        
        console.log(rowOutput.trim());
    }
}

printReversePascal(4);