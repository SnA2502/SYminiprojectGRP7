const db = require('../config/db.config.js');
const Admin = db.Admin;
exports.create = (req, res) => { 
    let admin = {};

    try{
        // Building admin object from upoading request's body
        admin.firstname = req.body.firstname;
        admin.lastname = req.body.lastname;
        admin.email = req.body.email;
        
    
        // Save to MySQL database
        Admin.create(admin).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a admin with id = " + result.id,
                admin: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
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
