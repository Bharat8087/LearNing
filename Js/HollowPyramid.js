function hollowPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === rows) {
            console.log('*'.repeat(2 * i - 1));
        } else {
            let str = '*' + ' '.repeat(2 * i - 3) + '*';
            console.log(str);
        }
    }
}

hollowPyramid(5);