import { Children } from "react";

// Data
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Fix Bug #123",
        taskDescription: "Resolve login authentication issue.",
        taskDate: "2025-01-10",
        category: "Bug Fixing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Revise project API documentation.",
        taskDate: "2025-01-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive design for the landing page.",
        taskDate: "2025-01-12",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Develop API",
        taskDescription: "Build authentication API for the project.",
        taskDate: "2025-01-15",
        category: "Backend Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Ensure all modules have proper unit tests.",
        taskDate: "2025-01-18",
        category: "Testing",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Optimize Database",
        taskDescription: "Improve database query performance.",
        taskDate: "2025-01-20",
        category: "Database Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Create UI Components",
        taskDescription: "Develop reusable UI components for the app.",
        taskDate: "2025-01-22",
        category: "Frontend Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Debug Payment Gateway",
        taskDescription: "Fix issues with the payment processing system.",
        taskDate: "2025-01-25",
        category: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ]
  }
];

   
   const admin = [
     {
       "id": 1,
       "email": "admin@example.com",
       "password": "123"
     }
   ];
   


//    export const setlocalstorage= localStorage.setItem('employes', JSON.stringify(employees))
export const setLocalStorage=localStorage.setItem('employees', JSON.stringify(employees));
export const setAdminLocalStorage=localStorage.setItem('admin', JSON.stringify(admin));

export const employes=JSON.parse(localStorage.getItem('employees'))
export const adminn=JSON.parse(localStorage.getItem('admin'))

// return{employes, adminn}

// const dataEmploy=localStorage.getItem('employees')

// console.log(admin);


   
   