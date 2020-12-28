import { shallow } from 'enzyme';
import Card from './Card';

it('Should have a Card component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});
