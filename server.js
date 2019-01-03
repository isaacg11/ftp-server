const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({
    url: "ftp://127.0.0.1:8000"
});
 
ftpServer.on('login', (data, resolve, reject) => {
    resolve()
});
 
ftpServer.listen().then(() => { 
    console.log('ftp server running')
});