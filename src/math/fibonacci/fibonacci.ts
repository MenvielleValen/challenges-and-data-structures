export const fibonacci = (n: number) => {

    const secuence = [1];

    let currentValue = 1;
    let previousValue = 0;
  
    if (n === 1) {
      return secuence;
    }

    let iterations = n - 1;

    while(iterations){

        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        secuence.push(currentValue);

        iterations -= 1;
    }

    return secuence;
}
