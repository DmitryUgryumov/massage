function console_log($data){ // сама функция
    if(is_array($data) || is_object($data)){
		echo("<script className='123'>console.log('php_array: ".json_encode($data)."');</script>");
	} else {
		echo("<script>console.log('php_string: ".$data."');</script>");
	}
}

// вызов функции
$test='dsa';
console_log($test);