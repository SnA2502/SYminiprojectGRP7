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
	  age: {
			type: Sequelize.INTEGER
    }    
	});
<<<<<<< HEAD

=======
>>>>>>> b3f5867dd9289d5035d317d0e3527d8db1ce59a9
	return Patient;
}
