import * as Yup from 'yup';

import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')]),
      district: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number(),
      reference: Yup.string().required(),
      complement: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const customer = await Customer.findOne({
      where: { email: req.body.email },
    });

    if (customer)
      return res.status(400).json({ error: 'Customer already exists.' });

    const {
      id,
      name,
      email,
      district,
      street,
      number,
      reference,
      complement,
    } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      email,
      district,
      street,
      number,
      reference,
      complement,
    });
  }
}

export default new CustomerController();
