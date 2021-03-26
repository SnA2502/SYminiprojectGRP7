module.exports = (sequelize, Sequelize) => {
	const Prescription = sequelize.define('prescription', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
    medicine_name: {
        type: Sequelize.STRING,
	  },
      dosage: {
        type: Sequelize.STRING,
    },
    frequency: {
        type: Sequelize.STRING,
    },	  
    duration: {
          type: Sequelize.STRING,
  }	  
  });

  return Prescription;
}