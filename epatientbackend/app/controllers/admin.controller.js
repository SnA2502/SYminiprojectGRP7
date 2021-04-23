const db = require('../config/db.config.js');
const Admin = db.Admin;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.create = (req, res) => {
    Admin.findOne({where : {email: req.body.email} }) //findOne({ where: { title: 'My Title' } });
    .then(admin =>{
        if (admin) {
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
                    const admin = {};
                    // const doctor = new Doctor({
                        //id: new sequelize.DataTypes.ObjectId(),
                        admin.firstname = req.body.firstname;
                        admin.lastname = req.body.lastname;
                        admin.email = req.body.email;
                        admin.contact_no= req.body.contact_no;//encrypting phone as password
                        admin.password= hash;
                   // });
                    // doctor
                    // .save()
                    Admin.create(admin)
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
exports.getAdminById = (req, res) => { 
    // find all Admin information from 
    let adminId = req.params.id;
    Admin.findByPk(adminId)
        .then(admin => {
            res.status(200).json({
                message: " Successfully Get a Doctor with id = " + adminId,
                admins: admin
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
  exports.retrieveAllAdmin = (req, res) => { 
    // find all ADMIN information from 
    Admin.findAll()
        .then(adminInfos => {
            res.status(200).json({
                message: "Get all Admin Infos Successfully!",
                admins: adminInfos
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
