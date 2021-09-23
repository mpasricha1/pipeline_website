module.exports = (sequelize, DataTypes) => {
	const Pipeline = sequelize.define("Pipeline", {
		name: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		provider: DataTypes.STRING(255), 
		code: DataTypes.STRING(255), 
		tsp: DataTypes.INTEGER, 
		loc_file_url: DataTypes.STRING(255),
		flow_file_url: DataTypes.STRING(255)

	});

	Pipeline.associate = (models) => {models.Pipeline.hasMany(models.Pipeline_Location)};

	return Pipeline; 
}