import { Animals } from './Animals';
import { Animal } from './Animal';

describe('Animals class', () => {
  let animals: Animals;
  let lion: Animal;

  beforeEach(() => {
    animals = new Animals();
    lion = new Animal('Mammal', 'Leo', 5, 'Good', 100);
  });

  test('Animals list is initially empty', () => {
    expect(animals.animalsList).toEqual([]);
  });

  test('Add animal to Animals list', () => {
    animals.addAnimal(lion);
    expect(animals.animalsList).toEqual([lion]);
  });

  test('Notify observers when adding an animal', () => {
    const observerMock = jest.fn();
    const observer = { update: observerMock };

    animals.attach(observer);
    animals.addAnimal(lion);

    expect(observerMock).toHaveBeenCalledWith(animals);
  });

  test('Detach observer', () => {
    const observerMock = jest.fn();
    const observer = { update: observerMock };

    animals.attach(observer);
    animals.detach(observer);
    animals.addAnimal(lion);

    expect(observerMock).not.toHaveBeenCalled();
  });
});
