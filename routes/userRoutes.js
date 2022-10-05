import express from 'express';
import User from '../models/user.js';

const router = express.Router();

//GET::
//http://localhost:3000/api/users/
router.get('/', async(req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
})

//POST::
//http://localhost:3000/api/users/create
//BODY
// {
// 	"firstName":"Brandon",
// 	"lastName":"Test",
// 	"userName":"Brandon123",
// 	"email":"brandon.test@test.com"
// }
router.post('/create', async(req, res) => {
    try {
        //creating the user document into the users collection
        const createdUser = await User.create({
            firstName:req.body.firstName, 
            lastName:req.body.lastName,
            userName:req.body.userName,
            email:req.body.email
        });

        return res.status(200).json({message:'User created', createdUser})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


export default router;