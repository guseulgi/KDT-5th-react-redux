const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dataRouter = require('./routes/data');
const userRouter = require('./routes/user');
app.use('/data', dataRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동 중입니다.`);
});
