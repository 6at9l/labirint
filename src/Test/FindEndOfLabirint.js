function setDir (){}

function move (){}

function check (){}

var data;

/*
	код исполняется при нажатии на "Run test", он не отображается в панельке
	что бы его не копировали
	в реальном проекте мы сделаем минификацию кода.
*/


// для хранения глобальных данных
// создавай все переменные в этом объекты 

var globalData = {

};


function wraperCode () {

	function oneSecPromisse () {
		// Возврат"обещания"
		return new Promise(function(res, rej) {
			
			 setTimeout(function(){

				if (data.result === true) {
					res();
				}
				
				else {
					rej();
				}

			 }, 1100);

		});
	}

	
	
	function positionCheck(){
		check();		
		oneSecPromisse().then(finish, findOut1); 
	}
	
	function findOut1(){		
		setDir(-1);		
		move();		
		oneSecPromisse().then(positionCheck, findOut2);
	
	}

	function findOut2(){
		setDir(1);
		move();
		oneSecPromisse().then(positionCheck, findOut2) 
	}
	
	

	function finish() {
		alert("Finish");
	}
	
	positionCheck();

}

export default {globalData, wraperCode};
