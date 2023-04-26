const Employee = require("../lib/Employee.js");

describe("employee", () => {
  describe("init", () => {
    it("should return an object containing a 'email', 'name', 'id'  property when called with the 'new' keyword", () => {
      var employee = new Employee();

      expect("email" in employee).toEqual(true);
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
    });
    
    });
    describe("getName()", () => {
    it("should return employee`s name", () => {
      var name = "Employee";
      var id = "1";
      var email = "employee@mail.com";
      var employee = new Employee(name, id, email);
      var result = employee.getName();
      expect(result).toEqual(name);
    });
    })
    describe("getId()", () => {
    it("should return employee`s id", () => {
      var name = "Employee";
      var id = "2";
      var email = "employee@mail.com";
      var employee = new Employee(name, id, email);
      var result = employee.getId();
      expect(result).toEqual(id);
    });
})
describe("getEmail()", () => {
    it("should return employee`s email", () => {
      var name = "Employee";
      var id = "3";
      var email = "employee@mail.com";
      var employee = new Employee(name, id, email);
      var result = employee.getEmail();
      expect(result).toEqual(email);
    });
})
describe("getRole()", () => {
    it("should return employee`s role", () => {
      var name = "Employee";
      var id = "4";
      var email = "employee@mail.com";
      var employee = new Employee(name, id, email);
      var result = employee.getRole();
      expect(result).toEqual("Employee");
    });
  });
});