function soma(x: number, y?: any): number {
    return x + y
    }
    console.log(soma(1, 2));//resultado: 3 (number)
    console.log(soma(1, "2"));//resultado: 12 (string)
    console.log(soma(1));//resultado: NaN (Not-A-Number)


