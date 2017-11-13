export class Ability {
  section: string;
  subsection: string;
  name: string;
  comment: string;
}

export class Experience {
  from: Date;
  to: Date;
  toPresent: boolean;
  title: string;
  description: string;
  abilities: Array<string>;
}

export class Hobby {
  section: string;
  name: string;
  comment: string;
}

export class Person {
  firstName: string;
  lastName: string;
  birthday: Date;
  diploma: string;
  disponibility: Date;
  disponibleNow: boolean;
}

export class Cv {
  person: Person;
  experiences: Array<Experience>;
  hobbies: Array<Hobby>;
  abilities: Array<Ability>;
}
