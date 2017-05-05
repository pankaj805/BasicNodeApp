import {Router} from 'express';
let router = Router();

import * as UserService from './userService';

router.post('/',(req,res,next)=>{
    let {mobile,name} = req.body;
    UserService.createUser(mobile,name)
    .then(user=>{
        console.log(' ********** : in user route success: ',user);
        res.data={user}
        next();
    })
    .catch(err => {
        console.log(' ********** : In error user route ',err);
        next(err)
    })
})

router.get('/:mob',(req,res,next)=>{
    let mobileNum = req.params.mob
    console.log(' ********** : mobileNum:',mobileNum);
    UserService.getUserByMobile(mobileNum)
    .then(user=>{
        console.log(' ********** : in user route success: ',user);
        if(user){
            res.data={
                code:1001,
                user
            }
        }else{
            res.data={
                code:404,
                message:'User Not found'
            }
        }
        next();
    })
    .catch(err => {
        console.log(' ********** : In error user route ',err);
        next(err)
    })
})

export default router;