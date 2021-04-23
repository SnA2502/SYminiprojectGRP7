module.exports = (sequelize, Sequelize) => {
	const Doctor = sequelize.define('doctor', {	
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
	  contact_no:{
		type: Sequelize.STRING
	  },
	  password:{
		  type: Sequelize.STRING
	  }
	   
	});

	return Doctor;
}