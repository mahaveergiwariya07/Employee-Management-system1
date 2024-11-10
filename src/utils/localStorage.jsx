const employees = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Complete Report",
        "description": "Finish the quarterly report for the finance team.",
        "date": "2024-11-05",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Team Meeting",
        "description": "Attend the team meeting to discuss project progress.",
        "date": "2024-10-25",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Client Call",
        "description": "Coordinate with the client for project updates.",
        "date": "2024-11-03",
        "category": "Client Relations"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Amit",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Design Review",
        "description": "Review the design drafts for the upcoming website.",
        "date": "2024-11-06",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Code Refactoring",
        "description": "Refactor old code to improve performance.",
        "date": "2024-10-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Prepare a presentation for the product launch.",
        "date": "2024-11-10",
        "category": "Marketing"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Suman",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Market Research",
        "description": "Conduct research on the latest industry trends.",
        "date": "2024-11-07",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Product Update",
        "description": "Update the product documentation.",
        "date": "2024-10-18",
        "category": "Product Management"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Budget Planning",
        "description": "Plan the budget for the next quarter.",
        "date": "2024-10-15",
        "category": "Finance"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Social Media Campaign",
        "description": "Develop the social media strategy for the holiday season.",
        "date": "2024-11-12",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Security Update",
        "description": "Install security patches on all systems.",
        "date": "2024-10-22",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Customer Support Training",
        "description": "Conduct training for the customer support team.",
        "date": "2024-11-08",
        "category": "Training"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Vikas",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "complete": false,
        "failed": true,
        "title": "Inventory Check",
        "description": "Complete a stock inventory check for the warehouse.",
        "date": "2024-10-30",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Sales Strategy Meeting",
        "description": "Discuss sales strategy for Q1.",
        "date": "2024-11-09",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "System Update",
        "description": "Perform a system update on company software.",
        "date": "2024-10-12",
        "category": "IT"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];

  


export const  setLocalStorage = ()=>{
       localStorage.setItem('employees',JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))
}
export const  getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}