import {MongoHelper} from 'pkmongo';

export const createUser = (mobile,name) =>{
    let data ={
        mobile:mobile,
        name:name
    }
    return MongoHelper.create('user',data)
    .then(user=>{
        return user;
    })
    .catch(err=>{
        return err;
    })
}

export const getUserByMobile = (mob) =>{
    return MongoHelper.findOneByCriteria('user',{mobile:mob})
    .then(user=>{
        return user;
    })
    .catch(err=>{
        return err;
    })
}