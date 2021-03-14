let express = require('express');
let router = express.Router();
 
const patient = require('../controllers/controller.js');

router.post('/api/patient/create', patient.create);
router.get('/api/patient/all', patient.retrieveAllPatients);
router.get('/api/patient/onebyid/:id', patient.getPatientById);
// router.get('/api/patient/filteringbyage', patient.filteringByAge);
// router.get('/api/patient/pagination', patient.pagination);
// router.get('/api/patient/pagefiltersort', patient.pagingfilteringsorting);
// router.put('/api/patient/update/:id', patient.updateById);
// router.delete('/api/patient/delete/:id', patient.deleteById);

module.exports = router;