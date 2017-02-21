import PersonRepository from '../../repositories/PersonRepository';
import Form from '../../components/organisms/Form';
import { fields } from '../../mock/fields.json';

export default (id) => {
  const form = new Form(fields, PersonRepository);
  return form.component;
};
