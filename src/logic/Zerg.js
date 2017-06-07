class CreateMatrix {
    labirint = {};
    pos = [];
    direction = "down";
    directionClass = "";

    constructor(lab){
        this.labirint = lab;
        let self = this; 
    }

    checkFinish(){
        return (this.labirint.matrix[this.pos[0]][this.pos[1]] === "*");
    }

    move(){
        
        let commandSucssesful = false;
        let y = this.pos[1];
        let x = this.pos[0];
 
        switch(this.direction){
            
            case "down": // if down -> j--;
                x++;
                console.log(this.direction, this.labirint.matrix[x][y]);
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
                if(this.labirint.matrix[x][y] !== " "){
                    this.pos[1] = y;
                    commandSucssesful = true;
                }
                break;
            case "right":
                y++;
                if(this.labirint.matrix[x][y] !== " "){
                    this.pos[1] = y;
                    commandSucssesful = true;
                }
                break;
        }
        return commandSucssesful;
    }
    
    setDirection(d){

    }
}
export default CreateMatrix;