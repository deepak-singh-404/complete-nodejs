var os 	= require('os-utils');
const { exec } = require("child_process");
const { spawn } = require('child_process');


setInterval(()=>{
    os.cpuUsage(function(v){
        console.log( 'CPU Usage (%): ' + v * 100 );
        if ((v * 100) > 60){
        }
            // const newProcessInstance = spawn(process.argv[0], process.argv.slice(1), {
            //     detached: true,
            //     stdio: 'ignore', // not sure if this is needed
            //   });
            // process.on("exit", function () {
            //     // require("child_process").spawn(process.argv.shift(), process.argv, {
            //     //     cwd: process.cwd(),
            //     //     detached : true,
            //     //     stdio: "inherit"
            //     // });
            //     console.log("i am here")
            //     setTimeout(()=>{
            //         console.log("i will get executed")
            //         exec("npm start", (error, stdout, stderr) => {
            //             if (error) {
            //                 console.log(`error: ${error.message}`);
            //                 return;
            //             }
            //             if (stderr) {
            //                 console.log(`stderr: ${stderr}`);
            //                 return;
            //             }
            //             console.log(`stdout: ${stdout}`);
            //         });

            //     },3000)
                
            // });
            // process.exit();
        // }
    });
    // console.log("This is pid " + process.pid);
    
    // os.cpuFree(function(v){
    //     console.log( 'CPU Free:' + v );
    // });
},1000)

// console.log("This is pid " + process.pid);

// setTimeout(function () {
   
// }, 5000);
