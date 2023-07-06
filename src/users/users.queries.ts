export const userQueries = {
    readOneUser:
        `SELECT * FROM cst_391.users WHERE cst_391.users.userId = ?`,
    searchForUser:
        `select * from cst_391.users where binary cst_391.users.username=?`,
    createUser:
        `insert into users(username,firstName,lastName,password,street,country,city,state,zip,profilePhoto) VALUES(?,?,?,?,?,?,?,?,?,?)`,
    updateUser:
        `update cst_391.users set username=?,firstName=?,lastName=?,password=?,
        street=?,country=?,city=?,state=?,zip=?,profilePhoto=? where userId=?`,
    deleteUser:
        `delete from cst_391.users where userId=?`,
}