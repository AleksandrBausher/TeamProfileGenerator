const Intern = require("../lib/Intern.js");
describe("intern", () => {
  describe("init", () => {
    it("should return an object containing a 'email', 'name', 'id' ,'school' property when called with the 'new' keyword", () => {
      var intern = new Intern();
      expect("email" in intern).toEqual(true);
      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    });
  });
  describe("getSchool()", () => {
    it("should return interns`s school", () => {
      var name = "Intern";
      var id = "1";
      var email = "intern@gmail.com";
      var school = "UofT";
      var obj = new Intern(name, id, email, school);
      var result = obj.getSchool();
      expect(result).toEqual(school);
    });
  });
  describe("getRole()", () => {
    it("should return intern`s role", () => {
      var name = "Intern";
      var id = "2";
      var email = "intern@gmail.com";
      var school = "UofT";
      var obj = new Intern(name, id, email, school);
      var result = obj.getRole();
      expect(result).toEqual("Intern");
    });
  });
});