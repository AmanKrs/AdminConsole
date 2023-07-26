var http = require("http");
var url = require("url");
http
  .createServer((req, res) => {
    //to get data on browser by node us http module.
    res.write("gdfgf");

    // to check the url and get respective data belong to that url
    if (req.url == "/login") {
      res.write("hello Http Module");
    } else if (req.url == "/data") {
      res.write("data get");
    }
    //closing response
    res.end();
    console.log(req.url);
  })
  .listen(8085);

  // url module use
  http
  .createServer((req, res) => {
   const path= "http://localhost:8083";
   res.write("hello url module")
   let mylink = path + req.url
   var qurl = url.parse(mylink, true);
   console.log(qurl);
   console.log(qurl.href); // output--- http://localhost:8083/xyz?id=01&name=aman
   console.log(qurl.query) // output--- [Object: null prototype] { id: '01', name: 'aman' }
   console.log(qurl.search) // output --- ?id=01&name=aman
   console.log(qurl.query.id) // output --- 01(value of id pass in url) 
   console.log(qurl.query.name) // output --- aman(value of name pass in url)
    res.end()
   
  })
  .listen(8083);