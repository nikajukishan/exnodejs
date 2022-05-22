const express = require('express');
const path = require('path');
const reqFilter=require('./middleware');
const route =express.Router();
route.use(reqFilter);
const app =express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    const user = { name:'kishan nikaju', class:'12th', email:'email@gmail.com',skills:['c++','PHP','DOt net','Node']
    }
    resp.render('profile',{user});
});
app.get('/login',(_,resp)=>{
    resp.render('login')
});
////////////////////////////////////////////////////////////////

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/blog',(_,resp)=>{
    resp.send('welcome to blog us')
});
app.get('/detail',(_,resp)=>{
    resp.send('welcome to detail us')
});
//app.get('*',(_,resp)=>{
  //  resp.sendFile(`${publicPath}/404.html`)
//});

route.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
route.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});
route.get('/contact',(_,resp)=>{
    resp.send('welcome to contact us')
});
app.use('/',route);
app.listen(5000);