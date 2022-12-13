const { type } = require("express/lib/response");
const User = require("../model/user");


class Users {

        // static Users = async (data) => {
        //     //console.log(data)
        //         try {
        //                 const query = {
        //                         email : data.email,
        //                         password : data.password,                             
        //                 }
        //             let foundUsers = await User.findOne({"email": query["email"] });
        //             if(await foundUsers.password == data.password && foundUsers.password != "admin")
        //             {
        //                 return {foundUsers}
        //             }
        //         }
        //         catch(err){
        //                 console.log(err);
        //                 console.log("Some unexpected error occured while logging in")
        //         }
        // }
        static getUserdetails = async (data) => {
                console.log(data)
                    try {
                                const query = {
                                                email : data.email,
                                                password : data.password,                             
                                        }
                            
                        let foundUser = await User.find({"user_id": query["user_id"] });
                        if(foundUser)
                        {
                            console.log(foundUser);
                            return foundUser;
                        }
                        
                    }
                    catch(err){
                            console.log(err);
                            console.log("Some unexpected error occured while logging in")
                    }
            }
}

module.exports.Users = Users;