export class Person
{
    constructor(firstname, surname)
    {
        this.firstname = firstname;
        this.surname = surname;
    }

    get fullname() { return this.firstname + " " + this.surname; }
    get mentionTag() { return this.firstname + this.surname; }
}