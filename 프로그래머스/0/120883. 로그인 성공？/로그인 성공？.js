function solution(id_pw, db) {
    const [id, pw] = id_pw;
    let reason = '';
    
    const user = db.find(([db_id, db_pw]) => db_id === id);
    
    if (!user) {
        reason = 'fail'; 
    } else {
        const [db_id, db_pw] = user;
        if (db_pw !== pw) {
            reason = 'wrong pw';
        } else {
            reason = 'login'; 
        }
    }
    
    return reason;
}
