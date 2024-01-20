export const powOf = (value: number, ex: number) => {

    let result = 1;

    for(let i = 0; i < ex; i++){
        result *= value;
    }

    return result;
}