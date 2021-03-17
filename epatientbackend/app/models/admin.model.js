module.exports = (sequelize, Sequelize) => {
	const Admin = sequelize.define('admin', {	
	  admin_id: {
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
	   
	});
   
	return Admin;
}