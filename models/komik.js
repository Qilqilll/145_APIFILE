module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define(
        'Komik',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            judul: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            penulis: {
                type: DataTypes.STRING,
                allowNull: false,
            },
 
            deskripsi: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            // Optional image fields
            imageType: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            imageName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            imageData: {
                type: DataTypes.BLOB('long'),
                allowNull: true,
            },
        },
        {
            tableName: 'komik',
            freezeTableName: true,
            timestamps: true,
        }
    );

    return Komik;
};