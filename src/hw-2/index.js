"use strict";
class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
    _areas = [];
    // Name, surname, position, company, experience, courses, contacts
    _lecturers = [];
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lecturers;
    }
    addArea(area) {
        this._areas = [...this._areas, area];
    }
    removeArea(item) {
        this._areas = this.areas.filter(area => area !== item);
    }
    addLecturer(lecturer) {
        this._lecturers = [...this._lecturers, lecturer];
    }
    removeLecturer(id) {
        this._lecturers = this._lecturers.filter(lecturer => lecturer.id !== id);
    }
}
class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels = [];
    _name;
    get levels() {
        return this._levels;
    }
    get name() {
        return this._name;
    }
    constructor(name) {
        this._name = name;
    }
    addLevel(level) {
        this._levels = [...this.levels, level];
    }
    removeLevel(item) {
        this._levels = this.levels.filter(level => level._name !== item._name);
    }
}
var LevelsEnum;
(function (LevelsEnum) {
    LevelsEnum["TRAINEE"] = "TRAINEE";
    LevelsEnum["JUNIOR"] = "JUNIOR";
    LevelsEnum["MIDDLE"] = "MIDDLE";
    LevelsEnum["SENIOR"] = "SENIOR";
})(LevelsEnum || (LevelsEnum = {}));
class Level {
    // implement getters for fields and 'add/remove group' methods
    _groups = [];
    _name;
    _description;
    get groups() {
        return this._groups;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
    addGroup(group) {
        this._groups = [...this._groups, group];
    }
    removeGroup(item) {
        this._groups = this._groups.filter(group => group._id !== item._id);
    }
}
class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods
    _id;
    _area;
    _status;
    _students = []; // Modify the array so that it has a valid toSorted method*
    _directionName;
    _levelName;
    constructor(id, area, status, students, directionName, levelName) {
        this._id = id;
        this._area = area;
        this._status = status;
        this._students = students;
        this._directionName = directionName;
        this._levelName = levelName;
    }
    showPerformance() {
        return this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
    addStudent(student) {
        this._students = [...this._students, student];
    }
    removeStudent(item) {
        this._students = this._students.filter(student => student._id !== item._id);
    }
}
class Student {
    _id;
    _firstName;
    _lastName;
    _birthYear;
    _grades = {}; // workName: mark
    _visits = {}; // lesson: present
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        const [lastName, firstName] = value.split(' ');
        this._lastName = lastName;
        this._firstName = firstName;
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    set grade(obj) {
        this._grades[obj.workName] = obj.mark;
    }
    set visit(obj) {
        this._visits[obj.lesson] = obj.present;
    }
    constructor(id, firstName, lastName, birthYear) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const presentCount = Object.values(this._visits).filter(present => present).length;
        const attendancePercentage = (presentCount / Object.keys(this._visits).length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
