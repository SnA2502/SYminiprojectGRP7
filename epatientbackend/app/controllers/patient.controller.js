
const db = require('../config/db.config.js');
const Patient = db.Patient;

exports.create = (req, res) => {
    let patient = {};

    try{
        // Building patient object from upoading request's body
        patient.firstname = req.body.firstname;
        patient.lastname = req.body.lastname;
        patient.email = req.body.email;
        patient.age = req.body.age;
    
        // Save to MySQL database
        Patient.create(patient).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a patient with id = " + result.id,
                patient: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllPatients = (req, res) => {
    // find all Patient information from 
    Patient.findAll()
        .then(patientInfos => {
            res.status(200).json({
                message: "Get all Patients' Infos Successfully!",
                patients: patientInfos
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

exports.getPatientById = (req, res) => {
  // find all Patient information from 
  let patientId = req.params.id;
  Patient.findByPk(patientId)
      .then(patient => {
          res.status(200).json({
              message: " Successfully Get a Patient with id = " + patientId,
              patients: patient
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


// exports.filteringByAge = (req, res) => {
//   let age = req.query.age;

//     Patient.findAll({
//                       attributes: ['id', 'firstname', 'lastname', 'age', 'address', 'copyrightby'],
//                       where: {age: age}
//                     })
//           .then(results => {
//             res.status(200).json({
//                 message: "Get all Customers with age = " + age,
//                 customers: results,
//             });
//           })
//           . catch(error => {
//               console.log(error);
//               res.status(500).json({
//                 message: "Error!",
//                 error: error
//               });
//             });
// }
 
// exports.pagination = (req, res) => {
//   try{
//     let page = parseInt(req.query.page);
//     let limit = parseInt(req.query.limit);
  
//     const offset = page ? page * limit : 0;
  
//     Patient.findAndCountAll({ limit: limit, offset:offset })
//       .then(data => {
//         const totalPages = Math.ceil(data.count / limit);
//         const response = {
//           message: "Paginating is completed! Query parameters: page = " + page + ", limit = " + limit,
//           data: {
//               "copyrightby": "https://loizenai.com",
//               "totalItems": data.count,
//               "totalPages": totalPages,
//               "limit": limit,
//               "currentPageNumber": page + 1,
//               "currentPageSize": data.rows.length,
//               "customers": data.rows
//           }
//         };
//         res.send(response);
//       });  
//   }catch(error) {
//     res.status(500).send({
//       message: "Error -> Can NOT complete a paging request!",
//       error: error.message,
//     });
//   }    
// }

// exports.pagingfilteringsorting = (req, res) => {
//   try{
//     let page = parseInt(req.query.page);
//     let limit = parseInt(req.query.limit);
//     let age = parseInt(req.query.age);
  
//     const offset = page ? page * limit : 0;

//     console.log("offset = " + offset);
  
//     Patient.findAndCountAll({
//                                 attributes: ['id', 'firstname', 'lastname', 'age', 'address'],
//                                 where: {age: age}, 
//                                 order: [
//                                   ['firstname', 'ASC'],
//                                   ['lastname', 'DESC']
//                                 ],
//                                 limit: limit, 
//                                 offset:offset 
//                               })
//       .then(data => {
//         const totalPages = Math.ceil(data.count / limit);
//         const response = {
//           message: "Pagination Filtering Sorting request is completed! Query parameters: page = " + page + ", limit = " + limit + ", age = " + age,
//           data: {
//               "copyrightby": "https://loizenai.com",
//               "totalItems": data.count,
//               "totalPages": totalPages,
//               "limit": limit,
//               "age-filtering": age,
//               "currentPageNumber": page + 1,
//               "currentPageSize": data.rows.length,
//               "customers": data.rows
//           }
//         };
//         res.send(response);
//       });  
//   }catch(error) {
//     res.status(500).send({
//       message: "Error -> Can NOT complete a paging request!",
//       error: error.message,
//     });
//   }      
// }

exports.updateById = async (req, res) => {
    try{
        let patientId = req.params.id;
        let patient = await Patient.findByPk(patientId);
    
        if(!patient){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a patient with id = " + patientId,
                patient: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                age: req.body.age
            }
            let result = await Patient.update(updatedObject, {returning: true, where: {patient_id: patientId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a patient with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a Patient with id = " + patientId,
                patient: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a patient with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try{
        let patientId = req.params.id;
        let patient = await Patient.findByPk(patientId);

        if(!patient){
            res.status(404).json({
                message: "Does Not exist a Patient with id = " + patientId,
                error: "404",
            });
        } else {
            await patient.destroy();
            res.status(200).json({
                message: "Delete Successfully a Patient with id = " + patientId,
                patient: patient,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a patient with id = " + req.params.id,
            error: error.message,
        });
    }
}