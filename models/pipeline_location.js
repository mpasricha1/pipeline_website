module.exports = (sequelize, DataTypes) => {
	const Pipeline_Location = sequelize.define("Pipeline_Location", {
		loc_id: {
			type: DataTypes.STRING(100), 
			allowNull: false
		}, 
		name: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		state: DataTypes.STRING(2), 
		county: DataTypes.STRING(100), 
		zone: DataTypes.STRING(25), 
		loc_type: DataTypes.STRING(3),
		flow_direct: DataTypes.STRING(1),
		has_missing_data: DataTypes.BOOLEAN
	});

	Pipeline_Location.associate = (models) => {
		models.Pipeline_Location.belongsTo(models.Pipeline, {foreignKey: {allowNull: false}});
		models.Pipeline_Location.hasMany(models.Flow_Readings);
	}; 

	return Pipeline_Location;
}