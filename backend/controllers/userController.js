const connection = require('./mysqlConnect');

const registerUser = (req, res) => {
  try {
    const findQuery = `SELECT * FROM mydb.user WHERE USERID = '${req.body.id}';`;
    connection.query(findQuery, (err, data) => {
      if (err) throw err;
      if (data.length !== 0)
        return res.status(400).json('이미 가입된 회원입니다.');

      const insertQuery = `INSERT INTO mydb.user (USERID, PASSWORD) VALUES ('${req.body.id}', '${req.body.password}')`;
      connection.query(insertQuery, (err, data) => {
        if (err) throw err;
        res.status(200).json('회원가입 성공');
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('회원 가입 실패, 알 수 없는 문제 발생');
  }
};

module.exports = {
  registerUser,
};
