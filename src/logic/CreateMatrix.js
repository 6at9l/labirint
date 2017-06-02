class CreateMatrix {

    matrix = "";
    x = 11;
    y = 11;

    constructor(x, y){
        this.genericMatrix(x, y);
        this.x = x;
        this.y = y;
    }

    getArrayNeighbor(startI, startJ, x, y, a){
		var arr = [];
		// Сосед с лева
		if ((startJ - 2) > 0){
			if (a[startI][startJ - 2] === 1){
				arr.push([startI, startJ - 2]);
			}
		}
		// Сосед с права
		if ((startJ + 2) < y){
			if (a[startI][startJ + 2] === 1){
				arr.push([startI, startJ + 2]);
			}
		}

		// Сосед с верху
		if ((startI - 2) > 0){
			if (a[startI - 2][startJ] === 1){
				arr.push([startI - 2, startJ]);
			}
		}
		// Сосед с низу
		if ((startI + 2) < y){
			if (a[startI + 2][startJ] === 1){
				arr.push([startI + 2, startJ ]);
			}
		}
		return arr;
	}

	genericMatrix(x, y){		
        if (typeof x === "undefined" || typeof y === "undefined"){
            x = this.x;
            y = this.y;
        }else{
            this.x = x;
            this.y = y;
        }
		var a = [];
		var count = 0;
		
		// Создание базового пространства
		for (var i = 0; i < y; i++) {
			a.push([]);
			for (var j = 0; j < x; j++) {
				var wall = ((i % 2) === 0) ? 0 : 1;
				a[i].push(((j % 2) === 0) ? 0 : wall);
				count += a[i][j];
			}
		}
		// Создание базового пространства
		var startI = -1;
		var startJ = -1;
		count--;
		while (true){
			startI = Math.round(1 + Math.random() * (x - 2));
			startJ = Math.round(1 + Math.random() * (y - 2));
			if (a[startI][startJ] === 1){
				a[startI][startJ] = "#";
				break;
			}
		}
		// Генерация пути
		var stakArr = [[startI, startJ]];
		var stek = 0;
		while (count > 0) {
			var neighborArr = this.getArrayNeighbor(startI, startJ, x, y, a);
			if (neighborArr.length > 0){
				var random = Math.round(Math.random() * (neighborArr.length - 1));
				a[neighborArr[random][0]][neighborArr[random][1]] = " ";
				if ((startI - neighborArr[random][0]) === 0){
					if (startJ > neighborArr[random][1]){
						a[startI][startJ - 1] = " ";
					}else{
						a[startI][startJ + 1] = " ";
					}			
				}else{
					if (startI > neighborArr[random][0]){
						a[startI - 1][startJ] = " ";
					}else{
						a[startI  + 1][startJ] = " ";
					}	
				}
				startI = neighborArr[random][0];
				startJ = neighborArr[random][1];
				stakArr.push([startI, startJ]);
				count--;
				stek = 0;
			}else{
				stek++;
				startI = stakArr[stakArr.length - stek][0];
				startJ = stakArr[stakArr.length - stek][1];
			}
		}

		random = Math.round(Math.random() * (stakArr.length - 1) + 1);
		if (stakArr.length > 0){
			startI = stakArr[random][0];
			startJ = stakArr[random][1];
			a[startI][startJ] = "*";
		}


		this.matrix = a;
	}
}

export default CreateMatrix;