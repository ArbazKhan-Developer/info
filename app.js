let express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let path = require('path');
const Formdata = require('./modal/modal')

app.use(express.urlencoded({ extended: false }))


require('./conn/conn');

app.use(express.static(path.join(__dirname, 'file')));

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('index');
});
// app.get('/formsubmitted', (req, res)=>{
//     res.render('formsubmit.hbs');
// });

app.post('/register', async (req,res)=>{
    try {
        const finalData= new Formdata({
         name: req.body.name,
         email: req.body.email,
         subject: req.body.subject,
         message: req.body.message
        })
        const final = await finalData.save()
        res.status(200).render('formsubmit.hbs');

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server stablished on port: ${port}`);
});