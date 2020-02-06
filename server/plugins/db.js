
const sequelize = require("sequelize")
module.exports = new sequelize(
    'DaFun',
    'root',
    '123456',
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306,
        'define': {
            'underscored': true
        }
    }
)