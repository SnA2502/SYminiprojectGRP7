let express = require('express');
let router = express.Router();
 
const patient = require('../controllers/patient.controller.js');
const doctor = require('../controllers/doctor.controller.js');
const admin = require('../controllers/admin.controller.js');

router.post('/api/patient/create', patient.create);
router.get('/api/patient/all', patient.retrieveAllPatients);
router.delete('/api/patient/delete/:id',patient.deleteById); 
router.get('/api/patient/onebyid/:id', patient.getPatientById);
router.put('/api/patient/update/:id', patient.updateById);
// router.get('/api/patient/filteringbyage', patient.filteringByAge);
// router.get('/api/patient/pagination', patient.pagination);
// router.get('/api/patient/pagefiltersort', patient.pagingfilteringsorting);


router.post('/api/doctor/create', doctor.create);
router.get('/api/doctor/all', doctor.retrieveAllDoctor);
router.delete('/api/doctor/delete/:id',doctor.deleteById); 
router.get('/api/doctor/onebyid/:id', doctor.getDoctorById);
router.put('/api/doctor/update/:id', doctor.updateById); 

router.post('/api/admin/create', admin.create);    //doubt- every post method has "message": "Upload Successfully a admin with id = undefined",
router.get('/api/admin/onebyid/:id', admin.getAdminById);
router.get('/api/admin/all', admin.retrieveAllAdmin);

module.exports = router;
