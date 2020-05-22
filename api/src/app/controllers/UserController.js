import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      avatar_id: Yup.number(),
      description: Yup.string(),
      password: Yup.string().min(6).required(),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')]),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) return res.status(400).json({ error: 'User already exists.' });

    const { avatar_id } = req.body;
    const avatarExists = await File.findByPk(avatar_id);

    if (!avatarExists)
      return res.status(400).json({ error: 'File not exists.' });

    const { id, name, description, avatar } = await User.create(req.body, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, name, email, description, avatar });
  }
}

export default new UserController();
