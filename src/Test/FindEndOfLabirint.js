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
