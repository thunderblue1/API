export const bibleQueries = {
    readAllBibles:
        `SELECT * FROM cst_391.bibles`,
    readOneBible:
        `SELECT * FROM cst_391.bibles WHERE cst_391.bibles.Id = ?`,
    searchForBible:
        `select * from cst_391.bibles where lower(name) like ?||lower(description) like ? ||lower(version) like ?`,
    createBible:
        `insert into bibles(myDate,name,version,description,price,productPhoto) VALUES(curdate(),?,?,?,?,?)`,
    updateBible:
        `update cst_391.bibles set name=?, version=?, description=?, price=?, productPhoto=? where Id=?`,
    deleteBible:
        `delete from cst_391.bibles where id=?`,
}