class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: string[] = [];
  // Name, surname, position, company, experience, courses, contacts
  _lecturers: {
    id: string;
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];
  }[] = [];

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): {
    id: string;
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];
  }[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    this._areas = [...this._areas, area];
  }

  removeArea(item: string): void {
    this._areas = this.areas.filter(area => area !== item);
  }

  addLecturer(lecturer: {
    id: string;
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];
  }): void {
    this._lecturers = [...this._lecturers, lecturer];
  }

  removeLecturer(id: string): void {
    this._lecturers = this._lecturers.filter(lecturer => lecturer.id !== id);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Level[] = [];
  _name: string;

  get levels(): Level[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Level): void {
    this._levels = [...this.levels, level];
  }

  removeLevel(item: Level): void {
    this._levels = this.levels.filter(level => level._name !== item._name);
  }
}

enum LevelsEnum {
  TRAINEE = 'TRAINEE',
  JUNIOR = 'JUNIOR',
  MIDDLE = 'MIDDLE',
  SENIOR = 'SENIOR',
}

class Level {
  // implement getters for fields and 'add/remove group' methods
  _groups: Group[] = [];
  _name: LevelsEnum;
  _description: string;

  get groups(): Group[] {
    return this._groups;
  }

  get name(): LevelsEnum {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  constructor(name: LevelsEnum, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(group: Group): void {
    this._groups = [...this._groups, group];
  }

  removeGroup(item: Group): void {
    this._groups = this._groups.filter(group => group._id !== item._id);
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods
  _id: string;
  _area: Area;
  _status: string;
  _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  _directionName: string;
  _levelName: LevelsEnum;

  constructor(
    id: string,
    area: Area,
    status: string,
    students: Student[],
    directionName: string,
    levelName: LevelsEnum
  ) {
    this._id = id;
    this._area = area;
    this._status = status;
    this._students = students;
    this._directionName = directionName;
    this._levelName = levelName;
  }

  showPerformance(): Student[] {
    return this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
  }

  addStudent(student: Student): void {
    this._students = [...this._students, student];
  }

  removeStudent(item: Student): void {
    this._students = this._students.filter(student => student._id !== item._id);
  }
}

class Student {
  _id: string;
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: { [workName: string]: number } = {}; // workName: mark
  _visits: { [lesson: string]: boolean } = {}; // lesson: present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    const [lastName, firstName] = value.split(' ');
    this._lastName = lastName;
    this._firstName = firstName;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(obj: { workName: string; mark: number }) {
    this._grades[obj.workName] = obj.mark;
  }

  set visit(obj: { lesson: string; present: boolean }) {
    this._visits[obj.lesson] = obj.present;
  }

  constructor(id: string, firstName: string, lastName: string, birthYear: number) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const presentCount = Object.values(this._visits).filter(present => present).length;
    const attendancePercentage = (presentCount / Object.keys(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
