// let promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     move()
//     resolve(data.result);
//   }, 1100);
// 	});

// promise
//   .then(
//     result => {
      
//     },
//     error => {
//       // вторая функция - запустится при вызове reject
//       alert("Rejected: " + error); // error - аргумент reject
//     }
//   );

//   move()  
//    if (data.result()){
//      if (data.finish()){
//        break;
//      }
//    } 
	 
// 	 else {
//      setDir(1)
     
//    }

/*
	код исполняется при нажатии на "Run test", он не отображается в панельке
	что бы его не копировали
	в реальном проекте мы сделаем минификацию кода.
*/


// для хранения глобальных данных
// создавай все переменные в этом объекты 
var globalData = {
	"moves" : 'тут значение'
};

function wraperCode () {
	var a = "Den";
	/*
	Твой код тут 
	*/
	console.log("hello world", globalData.moves);
}

export default {globalData, wraperCode};
/*
function log(a){console.log(a);}
function oneSecPromisse () {
	// Возврат"обещания"
	return new Promise(function(res, rej) {
		console.log("тут какой то код"); // .error .warn
		setTimeout(function(){
			if (Math.random() > 0.5) {
				res({f : "okey"});
			} else {
				rej({f : "bad"});
			}
		}, 1500);

	});
}

oneSecPromisse();
*/