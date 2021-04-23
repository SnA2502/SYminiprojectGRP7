const db = require('../config/db.config.js');
const config = require('../config/env.js');
const Doctor = db.Doctor;
//const JWT_KEY=require('../config/en.js');
//var config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// module.exports = {
//     'JWT_KEY': 'secret'
//   };

// exports.register = (req, res) => {
  
//     var hashedPassword = bcrypt.hashSync(req.body.contact_no, 8);
    
//     Doctor.create({
//       name : req.body.name,
//       email : req.body.email,
//       contact: req.body.contact,
//       password : hashedPassword
//     },
//     function (err, doctor) {
//       if (err) return res.status(500).send("There was a problem registering the user.")
//       // create a token
//       var token = jwt.sign({ id: doctor.id }, db.secret, {
//         expiresIn: 86400 // expires in 24 hours
//       });
//       res.status(200).send({ auth: true, token: token });
//     }); 
//   }
// 
// exports.register = (req, res) => {
  
//     var hashedPassword = bcrypt.hashSync(req.body.firstname, 8);
    
//     Doctor.create({
//       firstname : req.body.firstname,
//       lastname : req.body.lastname,
//       email : req.body.email,
//       password : hashedPassword
//     },
//     function (err, user) {
//       if (err) return res.status(500).send("There was a problem registering the user.")
//       // create a token
//       var token = jwt.sign({ id: user._id }, env.secret, {
//         expiresIn: 86400 // expires in 24 hours
//       });
//       res.status(200).send({ auth: true, token: token });
//     }); 
//   }
// exports.me= (req, res)=> { //authentication of token //get
//     var token = req.headers['x-access-token'];
//     if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
//     jwt.verify(token, config.secret, function(err, decoded) {
//       if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
//       res.status(200).send(decoded);
//     });
//   }
// exports.create = (req, res) => { 
//     let doctor = {};

//     try{
//         // Building doctor object from upoading request's body
//         doctor.firstname = req.body.firstname;
//         doctor.lastname = req.body.lastname;
//         doctor.email = req.body.email;
//         doctor.age = req.body.age;
    
//         // Save to MySQL database
//         Doctor.create(doctor).then(result => {    
//             // send uploading message to client
//             res.status(200).json({
//                 message: "Upload Successfully a patient with id = " + result.id,
//                 doctor: result,
//             });
//         });
//     }catch(error){
//         res.status(500).json({
//             message: "Fail!",
//             error: error.message
//         });
//     }
// }
exports.create = (req, res) => {
    Doctor.findOne({where : {email: req.body.email} }) //findOne({ where: { title: 'My Title' } });
    .then(doctor =>{
        if (doctor) {
            return res.status(409).json({
                message: 'email already exists'
            });
        } else{
            bcrypt.hash(req.body.contact_no, 10, (err,hash) => {
                if (err){
                    return res.status(500).json({
                        error: err
                    });
                } else { 
                    const doctor = {};
                    // const doctor = new Doctor({
                        //id: new sequelize.DataTypes.ObjectId(),
                        doctor.firstname = req.body.firstname;
                        doctor.lastname = req.body.lastname;
                        doctor.email= req.body.email;
                        doctor.contact_no= req.body.contact_no;//encrypting phone as password
                        doctor.password= hash;
                   // });
                    // doctor
                    // .save()
                    Doctor.create(doctor)
                    .then(result =>{
                            console.log(result);
                            res.status(201).json({
                            message: 'Doctor created'
                        });
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
           })
        }
    })
      
}

exports.login = (req,res) =>{
    Doctor.findOne({where : {email: req.body.email} })
    .then( doctor =>{
        if(!doctor){//doctor.length<1
            return res.status(401).json({
                message:"Auth failed" //auth failed
            });
        }
        bcrypt.compare(req.body.password, doctor.password, (err, result) =>{
           if (err){
            return res.status(401).json({
                message:"Auth failed" //auth failed
            });
           }
           if (result){
            var token = jwt.sign({ email: doctor.email, id: doctor._id }, config.JWT_KEY, {
                expiresIn: '1h' // expires in 24 hours
              });
            //  const token = jwt.sign({
            //        email: doctor.email,
            //        userId: doctor._id
            //    },
            //    process.config.JWT_KEY,{
            //        expiresIn:"1h"
            //    });
            return res.status(200).json({
                message:"Auth successful",
                token:token //auth failed
            });
           } 
           return res.status(401).json({
            message:"Auth failed" //auth failed
        });
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}
exports.logout = (req, res) => {
    res.status(200).send(
        { auth: false, 
            token: null 
        });
  }


exports.retrieveAllDoctor = (req, res) => { 
    // find all DOCTOR information from 
    Doctor.findAll()
        .then(doctorInfos => {
            res.status(200).json({
                message: "Get all Doctors' Infos Successfully!",
                doctors: doctorInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}


exports.getDoctorById = (req, res) => { 
        // find all Doctor information from 
        let doctorId = req.params.id;
        Doctor.findByPk(doctorId)
            .then(doctor => {
                res.status(200).json({
                    message: " Successfully Get a Doctor with id = " + doctorId,
                    doctors: doctor
                });
            })
            . catch(error => {
              // log on console
              console.log(error);
      
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      }
    exports.updateById = async (req, res) => {
        try{
            let doctorId = req.params.id;
           
            let doctor = await Doctor.findByPk(doctorId);
        
            if(!doctor){
                // return a response to client
                res.status(404).json({
                    message: "Not Found for updating a doctor with id = " + doctorId,
                    doctor: "",
                    error: "404"
                });
            } else {    
                // update new change to database
                let updatedObject = {
                    id:doctorId,
                    firstname: req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body. email,
                    contact_no:req.body.contact_no
                   // age: req.body.age
                }
                let result = await Doctor.update(updatedObject, {returning: true, where: {id: doctorId }});
                
                // return the response to client
                if(!result) {
                    res.status(500).json({
                        message: "Error -> Can not update a doctor with id = " + req.params.id,
                        error: "Can NOT Updated",
                    });
              }
              
             
                 res.status(200).json({
                     message: "Update successfully a Doctor with id = " + doctorId,
                     doctor: updatedObject,
                 });
             
         } 
        }catch(error){
             res.status(500).json({
                 message: "Error -> Can not update a doctor with id = " + req.params.id,
                 error: error.message
             });
         }
     }
exports.deleteById = async (req, res) => { //
             try{
                 let doctorId = req.params.id;
                 let doctor = await Doctor.findByPk(doctorId);
                 if(!doctor){
                     res.status(404).json({
                       message: "Does Not exist a doctor with id = " + doctorId,
                         error: "404",
                     });
                 } else {
                     await doctor.destroy();
                     res.status(200).json({
                         message: "Delete Successfully a Doctor with id = " + doctorId,
                         doctors: doctor,
                     });
                 }
             } catch(error) {
                res.status(500).json({
                     message: "Error -> Can NOT delete a Doctor with id = " + req.params.id,
                     error: error.message,
                 });
             }
        }
            