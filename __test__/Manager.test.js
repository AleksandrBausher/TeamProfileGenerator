const Manager = require("../lib/Manager");
describe("manager", () => {
  describe("init", () => {
    it("should return an object containing a 'email', 'name', 'id' ,'office number' property when called with the 'new' keyword", () => {
      const manager = new Manager();
      expect("email" in manager).toEqual(true);
      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
    });
  });
  describe("getOfficeNumber()", () => {
    it("should return managers`s office number", () => {
      const name = "Manager";
      const id = "1";
      const email = "manager@gmail.com";
      const officeNumber = "123";
      const obj = new Manager(name, id, email, officeNumber);
      const result = obj.getOfficeNumber();
      expect(result).toEqual(officeNumber);
    });
  });
  describe("getRole()", () => {
    it("should return manager`s role", () => {
      const name = "Manager";
      const id = "2";
      const email = "manager@gmail.com";
      const officeNumber = "1234";
      const obj = new Manager(name, id, email, officeNumber);
      const result = obj.getRole();
      expect(result).toEqual("Manager");
    });
  });
});