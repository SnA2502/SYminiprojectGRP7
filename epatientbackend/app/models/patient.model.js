module.exports = (sequelize, Sequelize) => {
	const Patient = sequelize.define('patient', {	
	  id: {
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
			type: Sequelize.STRING
	  },
	  contact_no: {
			type: Sequelize.INTEGER
    },
	password:{ type: Sequelize.STRING },
	prescription: {
		type: Sequelize.STRING(1024)
	}    
	});

	return Patient;
}