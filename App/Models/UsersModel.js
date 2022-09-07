const Database = require('../DB/database.ts');

class UserModel {
 db = new Database()

 tableUser(){
    this._db.create.loadSchema('Users' , { //Yo se que no funciona, pero asi debe ser

        fields:{
            id:"int",
            name:"text",
            lastName:"text",
            age:"int",
        }, 

        key:['id']

    })
 }
}