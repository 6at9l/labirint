class CreateMatrix {
    labirint = {};
    pos = [];
    directionIndex = 0;
    directionArr = ["down", "right", "up", "left"];
    // directionClass = "";

    constructor(lab, render){
        this.labirint = lab;
    }

    checkFinish(){
        return (this.labirint.matrix[this.pos[0]][this.pos[1]] === "*");
    }

    move(){
        
        let commandSucssesful = false;
        let y = this.pos[1];
        let x = this.pos[0];
 
        switch(this.directionArr[this.directionIndex]){
            
            case "down": // if down -> j--;
                x++;
                if(this.labirint.matrix[x][y] !== 0){
                    this.pos[0] = x;
                    commandSucssesful = true;
                }
                break;
            case "up": // if up 
                x--;
                if(this.labirint.matrix[x][y] !== 0){
                    this.pos[0] = x;
                    commandSucssesful = true;
                }
                break;
            case "left":
                y--;
                if(this.labirint.matrix[x][y] !== 0){
                    this.pos[1] = y;
                    commandSucssesful = true;
                }
                break;
            case "right":
                y++;
                if(this.labirint.matrix[x][y] !== 0){
                    this.pos[1] = y;
                    commandSucssesful = true;
                }
                break;
            default:

        }
        return commandSucssesful;
    }

    setDirection(d){
        d = d > 0 ? 1 : -1;
        let oldDir = this.dirToDeg(this.directionArr[this.directionIndex]);

        this.directionIndex += d;   
        this.directionIndex = this.directionIndex < 0 ? this.directionArr.length - 1 : this.directionIndex;
        this.directionIndex = this.directionIndex >= this.directionArr.length ? 0 : this.directionIndex;

        let newDir = this.dirToDeg(this.directionArr[this.directionIndex]);
        return [this.directionArr[this.directionIndex], oldDir, newDir];
    }

    dirToDeg(strDir){
        switch(strDir){
            case "down":
                return 0;
            case "up":
                return 180;
            case "right":
                return 270;
            case "left":
                return 90
            default:
        }
    }
}
export default CreateMatrix;