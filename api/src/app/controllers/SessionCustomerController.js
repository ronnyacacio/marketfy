import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import auth from '../../config/auth';
import Customer from '../models/Customer';

class SessionUserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(6).required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { email, password } = req.body;

    const customer = await Customer.findOne({ where: { email } });

    if (!customer) return res.status(401).json({ error: 'Customer not found' });

    if (!(await customer.checkPassword(password)))
      return res.status(401).json({ error: 'Password does not match' });

    const { id, name } = customer;

    return res.json({
      customer: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionUserController();
