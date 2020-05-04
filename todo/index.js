const mongo = require('mongoose');
const bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

mongo.connect('mongodb://mongo:27017/toDoApp');

var todoSchema  = new mongo.Schema({
  item:String
});

var todo = mongo.model('Todo',todoSchema);
//var todos = [{item:'get milk'} , {item:'eat chocolate'} , {item:'go to sleep'} ]
module.exports = (app)=>
{

    app.get('/',(req,res)=>
    {
      //res.render('index' ,{todos:todos} );
    todo.find({},(err,data)=>
    {
      if(err) throw err;

      res.render('index',{todos:data});
    });


  });

  app.post('/',urlEncodedParser,(req,res)=>
  {

        todo({item:req.body.task}).save((err,data)=>{
          if(err) throw err;
          console.log('Item saved');
          res.send(req.body.task);
        });



  });

  app.post('/delete',urlEncodedParser,(req,res)=>{

    todo.find({item:req.body.task}).remove((err,data)=>{

      if(err) throw err;
      res.send(data);
      console.log('Removed the item');

    });
  });
}
