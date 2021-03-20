module.exports = (sequelize, Sequelize) => {
	const Prescription = sequelize.define('epres', {	
	  pres_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  patient_id: {
			type: Sequelize.INTEGER,
            foreignKey: true
	  },
	  doctor_id: {
			type: Sequelize.INTEGER,
            foreignKey: true
  	},
	  
	  date: {
			type: Sequelize.TIMESTAMP
    }    
	});

	return Prescription;
}