const { type } = require("express/lib/response");
const User = require("../model/user");


class UserAuth {

        static loginUser = async (data) => {
            //console.log(data)
                try {
                        const query = {
                                email : data.email,
                                password : data.password,                             
                        }
                    let foundUser = await User.findOne({"email": query["email"] });
                    if(foundUser && foundUser.password === data.password)
                    {
                        
                    return {foundUser}
                    }
                    else{
                        return null
                    }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        };

        static  addUser = async (data) => {
                try {
                  const query = {
                    email: data.email,
                    password: data.password,
                    username: data.username

                  };
                  const newMeter = new User(data);
                  await newMeter.save();
                  return { newMeter };
                } catch (err) {
                  console.log(err);
                  console.log('Some unexpected error occured while adding electric meter');
                }
              };
            
        static deleteUser = async (data) => {
                // console.log('line:', data);
                console.log(data)
                try {
                  const query = {
                    _id: data,

                  };
                //   console.log(id)
            
                  const oldMeter = await User.remove(query);
            
                  console.log(oldMeter);
                  return { oldMeter };
                } catch (err) {
                  console.log(err);
                  console.log(
                    'Some unexpected error occured while deleting electric meter'
                  );
                }
              };
            
              static updateUser = async (id, data) => {
                try {
                  const query = {
                    _id: id,
                  };
            
                  const updatedMeter = await User.findOneAndUpdate(query, data);
            
                  if (updatedMeter) {
                    return { updatedMeter };
                  }
                } catch (err) {
                  console.log(err);
                  console.log(
                    'Some unexpected error occured while updating electric meter'
                  );
                }
              };
            
              static getAllUser = async (id, data) => {
                try {
                  const meters = await User.find();
            
                  if (meters?.length > 0) {
                    return meters;
                  }
                } catch (err) {
                  console.log(err);
                  console.log('Some unexpected error occured while fetching meters');
                }
              };
}

module.exports.UserAuth = UserAuth;