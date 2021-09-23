module.exports = (sequelize, DataTypes) => {
	const Flow_Readings = sequelize.define("Flow_Readings", {
		loc_id: DataTypes.STRING(100),
		flow_date: DataTypes.DATEONLY, 
		tsq: DataTypes.INTEGER, 
		flow_dir: DataTypes.STRING(1), 
		cycle_desc: DataTypes.STRING(10), 
		to_delete: DataTypes.BOOLEAN
	}); 

	Flow_Readings.associate = (models) => {
		models.Flow_Readings.belongsTo(models.Pipeline_Location, {foreignKey: {allowNull: false}}); 
	}; 

	return Flow_Readings;
}