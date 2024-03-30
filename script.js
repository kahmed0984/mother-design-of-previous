
document.getElementById('service_one').onclick = function(){
	document.getElementById('service_contant_one').style.display = 'none';
}
document.getElementById('service_tow').onclick = function(){
	document.getElementById('service_contant_one').style.display = 'block';
}

document.getElementById('service_three').onclick = function(){
	var showContant = document.getElementById('service_contant_three').style.display;

	if( showContant === 'none'){
		document.getElementById('service_contant_three').style.display = 'block';
	}
	else if( showContant === 'block'){
		document.getElementById('service_contant_three').style.display = 'none';
	}
	else{
		document.getElementById('service_contant_three').style.display = 'none';
	}
}
