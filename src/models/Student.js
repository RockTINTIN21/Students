const Person = require('./Person');
class Student extends Person{
    _group
    constructor(name,lastName,age,group) {
        super(name, lastName, age);
        this.id = Date.now();
        this.group = group;
    }
    get group(){
        return this._group;
    }
    set group(newGroup){
        if (!/^[а-яА-Я0-9]+$/.test(newGroup) || newGroup.length > 15 || newGroup.length < 3) {
            throw new Error("Группа должна состоять из кириллицы и цифр, иметь не больше 15 символов");
        }
        this._group = newGroup;

    }
}
module.exports = Student