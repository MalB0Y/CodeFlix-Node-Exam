var args = process.argv.splice(2,process.argv.length-1);
var readline = require('readline');
var fs = require('fs');

if(args.length == 0) {
    var readl = readline.createInterface({
        pmt: process.stdin,
        output: process.stdout
    });
      
    rl.on('line', (pmt) => {
        console.log(pmt);
        readl.close();
    });
}

if(args.length == 1) {
    var readl = readline.createInterface({
        pmt: fs.createReadStream(args[0], 'utf8'),
    });

    rl.on('line', function(line) {
        console.log(line);
        readl.close();
    });
}

if(args.length == 2) {

    var readl = readline.createInterface({
        pmt: fs.createReadStream(args[1], 'utf8'),
    });
    
    rl.on('line', function(line) {
        console.log(line + '$');
        readl.close();
    });
}

if(args.length >= 3) {
    console.log('Commande Inconnue');
}