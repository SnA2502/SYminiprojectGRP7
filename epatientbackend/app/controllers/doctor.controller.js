const db = require('../config/db.config.js');
const Doctor = db.Doctor;
exports.create = (req, res) => { 
    let doctor = {};

    try{
        // Building doctor object from upoading request's body
        doctor.firstname = req.body.firstname;
        doctor.lastname = req.body.lastname;
        doctor.email = req.body.email;
        doctor.age = req.body.age;
    
        // Save to MySQL database
        Doctor.create(doctor).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a patient with id = " + result.id,
                doctor: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
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
            