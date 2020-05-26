import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import auth from '../../config/auth';
import Provider from '../models/Provider';
import File from '../models/File';

class SessionProviderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { email, password } = req.body;

    const provider = await Provider.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!provider) return res.status(401).json({ error: 'provider not found' });

    if (!(await provider.checkPassword(password)))
      return res.status(401).json({ error: 'Password does not match' });

    const { id, name, avatar } = provider;

    return res.json({
      provider: {
        id,
        name,
        email,
        avatar,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionProviderController();
