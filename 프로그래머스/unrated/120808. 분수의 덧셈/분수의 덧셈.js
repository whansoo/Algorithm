function solution(numer1, denom1, numer2, denom2) {
   const denom = denom1 * denom2
   const numer = numer1 * denom2 + numer2 * denom1
   
   let result;
   if(denom > numer) {
       result = numer
   } else {
       result = denom
   }
       while (true) {
           if(denom % result === 0) {
               if(numer % result === 0) {
                   return [numer / result,denom / result]
               }
           }
           result = result - 1
       }
   
}