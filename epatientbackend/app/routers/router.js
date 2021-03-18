let express = require('express');
let router = express.Router();
 
const patient = require('../controllers/patient.controller.js');
const doctor = require('../controllers/doctor.controller.js');
const admin = require('../controllers/admin.controller.js');

router.post('/api/patient/create', patient.create);
router.get('/api/patient/all', patient.retrieveAllPatients);
router.get('/api/patient/onebyid/:id', patient.getPatientById);//
// router.get('/api/patient/filteringbyage', patient.filteringByAge);
// router.get('/api/patient/pagination', patient.pagination);
// router.get('/api/patient/pagefiltersort', patient.pagingfilteringsorting);
// router.put('/api/patient/update/:id', patient.updateById);
// router.delete('/api/patient/delete/:id', patient.deleteById);
router.post('/api/doctor/create', doctor.create);
router.get('/api/doctor/all', doctor.retrieveAllDoctor);
router.delete('/api/doctor/delete/:id',doctor.deleteById); //
router.get('/api/doctor/onebyid/:id', doctor.getDoctorById); //

module.exports = router;
