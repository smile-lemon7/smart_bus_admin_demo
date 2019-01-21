
export default {
  'POST /api/login': (req, res) => {
    const { password, userName } = req.body;
    if (password === 'admin' && userName === 'admin') {
      res.status(201).send({
        code: 0,
        data: {
          id: 1,
          name: 'admin',
          phone: '33333333333',
          des: 'admin',
          pwd: 'admin',
          create_at: '',
          update_at: '',
        },
      });
    } else {
      res.status(201).send({
        code: 1,
        data: {
          message: '账号或密码错误',
        },
      });
    }
  },
};
