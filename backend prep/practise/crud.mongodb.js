use("CrudDb")
// db.createCollection("courses")
// db.courses.insertMany([
//   {
//     name: "C++ Basics",
//     price: 1999,
//     assignments: 10,
//     projects: 3
//   },
//   {
//     name: "Advanced Java",
//     price: 2999,
//     assignments: 15,
//     projects: 5
//   },
//   {
//     name: "Web Development Bootcamp",
//     price: 2999,
//     assignments: 20,
//     projects: 8
//   },
//   {
//     name: "Data Structures & Algorithms",
//     price: 3499,
//     assignments: 25,
//     projects: 10
//   },
//   {
//     name: "Python for Beginners",
//     price: 1499,
//     assignments: 12,
//     projects: 4
//   },
//   {
//     name: "Machine Learning Intro",
//     price: 3999,
//     assignments: 18,
//     projects: 6
//   },
//   {
//     name: "MongoDB Mastery",
//     price: 1799,
//     assignments: 8,
//     projects: 2
//   },
//   {
//     name: "React JS Complete Guide",
//     price: 2999,
//     assignments: 16,
//     projects: 7
//   },
//   {
//     name: "Node.js Backend Development",
//     price: 2599,
//     assignments: 14,
//     projects: 5
//   },
//   {
//     name: "Full Stack Development",
//     price: 4999,
//     assignments: 30,
//     projects: 12
//   }
// ])
db.courses.updateMany({price : 3999},{$set:{price : 0}})
db.courses.deleteMany({price : 0})
