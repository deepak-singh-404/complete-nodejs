var os 	= require('os-utils');


os.cpuUsage(function(v){
	console.log( 'CPU Usage (%): ' + v * 100 );
});


setInterval(() => {
    os.cpuUsage(function(v){
        console.log( 'CPU Usage (%): ' + v * 100 );
    });
}, 1000);
