module.exports = (sequelize, Sequelize) => {
	const Patient = sequelize.define('patient', {	
	  patient_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
  	},
	  email: {
			type: Sequelize.TEXT
	  },
	  age: {
			type: Sequelize.INTEGER
    }    
	});

	return Patient;
}