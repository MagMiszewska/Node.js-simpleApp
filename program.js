process.stdin.setEncoding('utf-8');
process.stdout.write('Write /version for Node version info, /language for user language info, /exit to exit program.\n');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/version':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/language':
                process.stdout.write(process.env.lang + '\n');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});