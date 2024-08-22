module.exports = (sequelize, DataTypes) => {
  const Raza = sequelize.define(
    "Raza",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      usuarioCreacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      usuarioModificacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fechaModificacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "raza",
      timestamps: false,
    }
  );
  return Raza;
};