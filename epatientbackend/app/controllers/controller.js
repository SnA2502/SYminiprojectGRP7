
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

//     Customer.findAll({
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
  
//     Customer.findAndCountAll({ limit: limit, offset:offset })
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
  
//     Customer.findAndCountAll({
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

// exports.updateById = async (req, res) => {
//     try{
//         let customerId = req.params.id;
//         let customer = await Customer.findByPk(customerId);
    
//         if(!customer){
//             // return a response to client
//             res.status(404).json({
//                 message: "Not Found for updating a customer with id = " + customerId,
//                 customer: "",
//                 error: "404"
//             });
//         } else {    
//             // update new change to database
//             let updatedObject = {
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 address: req.body.address,
//                 age: req.body.age
//             }
//             let result = await Customer.update(updatedObject, {returning: true, where: {id: customerId}});
            
//             // return the response to client
//             if(!result) {
//                 res.status(500).json({
//                     message: "Error -> Can not update a customer with id = " + req.params.id,
//                     error: "Can NOT Updated",
//                 });
//             }

//             res.status(200).json({
//                 message: "Update successfully a Customer with id = " + customerId,
//                 customer: updatedObject,
//             });
//         }
//     } catch(error){
//         res.status(500).json({
//             message: "Error -> Can not update a customer with id = " + req.params.id,
//             error: error.message
//         });
//     }
// }

// exports.deleteById = async (req, res) => {
//     try{
//         let customerId = req.params.id;
//         let customer = await Customer.findByPk(customerId);

//         if(!customer){
//             res.status(404).json({
//                 message: "Does Not exist a Customer with id = " + customerId,
//                 error: "404",
//             });
//         } else {
//             await customer.destroy();
//             res.status(200).json({
//                 message: "Delete Successfully a Customer with id = " + customerId,
//                 customer: customer,
//             });
//         }
//     } catch(error) {
//         res.status(500).json({
//             message: "Error -> Can NOT delete a customer with id = " + req.params.id,
//             error: error.message,
//         });
//     }
// }