function setUserRef(db,dbReference,child){
    if(child === null){
        return db.ref(dbReference);
    }
    else{
        return db.ref(dbReference).child(child);
    }
}

function init(dbUrl, serviceAccountKey, admin=require("firebase-admin")){
    //Author: Mayur N. Chhapra
    let serviceAccount = serviceAccountKey;
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: dbUrl
    });
      
}
function insert(data, dbReference, child=null,admin=require("firebase-admin")){
    let db = admin.database();
    let usersRef = setUserRef(db,dbReference,child);
    usersRef.set(data,function(error){
        if (!error){
            console.log('Success...');
        }
        else{
            console.log(error);
        }
    });
} 

module.exports={
    init : init,
    insert: insert
}
