// Mock Users Database
export const mockUsers = [
  {
    id: 1,
    email: 'akshada333@shree.com',
    password: 'barbie@123',
    name: 'Akshada Vaibhav Chilwar',
    username: 'akshada333',
    rollNumber: 'FS2024001'
  },
  {
    id: 2,
    email: 'deepika333@shree.com',
    password: 'deepika@123',
    name: 'Deepika Rajendra Nikam',
    username: 'deepika333',
    rollNumber: 'FS2024002'
  },
  {
    id: 3,
    email: 'harshada333@shree.com',
    password: 'harshada@123',
    name: 'Harshada Santosh Magar',
    username: 'harshada333',
    rollNumber: 'FS2024003'
  },
  {
    id: 4,
    email: 'rutika333@shree.com',
    password: 'rutika@123',
    name: 'Rutika Namdev Kadam',
    username: 'rutika333',
    rollNumber: 'FS2024004'
  },
  {
    id: 5,
    email: 'prajakta333@shree.com',
    password: 'prajakta@123',
    name: 'Prajakta Mahendra Patole',
    username: 'prajakta333',
    rollNumber: 'FS2024005'
  },
  {
    id: 6,
    email: 'john333@shree.com',
    password: 'john@123',
    name: 'John Narayan Tirupathi',
    username: 'john333',
    rollNumber: 'FS2024006'
  }
];

// Mock Exam Questions
export const examQuestions = {
  JavaScript: {
    practice: [
      {
        id: 1,
        question: 'What is the output of: console.log(typeof null)?',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'Which method is used to add elements at the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'What does the "this" keyword refer to in JavaScript?',
        options: ['The global object', 'The current function', 'The current object', 'Depends on context'],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Which of the following is NOT a JavaScript data type?',
        options: ['String', 'Boolean', 'Float', 'Symbol'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What is a closure in JavaScript?',
        options: ['A function with no return value', 'A function that returns another function', 'A function with access to parent scope', 'A function without parameters'],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'What is the difference between == and ===?',
        options: ['No difference', '== checks type, === doesn\'t', '=== checks type, == doesn\'t', 'Both are deprecated'],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'What is the purpose of Array.map()?',
        options: ['Filter array', 'Transform array elements', 'Sort array', 'Find element'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'How do you declare a constant in JavaScript?',
        options: ['var', 'let', 'const', 'constant'],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'What is event bubbling?',
        options: ['Event moves from child to parent', 'Event moves from parent to child', 'Event stays at target', 'Event is cancelled'],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'What is the purpose of Promise in JavaScript?',
        options: ['Handle errors', 'Handle async operations', 'Validate data', 'Create objects'],
        correctAnswer: 1
      }
    ],
    final: [
      {
        id: 1,
        question: 'What is hoisting in JavaScript?',
        options: ['Moving code up', 'Variable/function declarations moved to top', 'Error handling', 'Code optimization'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Which method is used to convert JSON string to object?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'What is the spread operator in JavaScript?',
        options: ['...', '++', '&&', '||'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'What does async/await do in JavaScript?',
        options: ['Create delays', 'Handle promises synchronously', 'Stop execution', 'Create loops'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is the difference between let and var?',
        options: ['No difference', 'let is block-scoped', 'var is block-scoped', 'let is faster'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is a callback function?',
        options: ['A function passed as argument', 'A function that calls back', 'A recursive function', 'An arrow function'],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'What is destructuring in JavaScript?',
        options: ['Deleting objects', 'Extracting values from objects/arrays', 'Breaking code', 'Creating objects'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'What is the purpose of setTimeout()?',
        options: ['Set time', 'Execute code after delay', 'Measure time', 'Stop execution'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What is the purpose of the "use strict" directive?',
        options: ['Make code strict', 'Enable strict mode', 'Disable features', 'Speed up code'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What is prototype in JavaScript?',
        options: ['A blueprint', 'Object inheritance mechanism', 'A design pattern', 'A data type'],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'What is the difference between null and undefined?',
        options: ['No difference', 'null is assigned, undefined is default', 'undefined is assigned, null is default', 'Both are same type'],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'What is the purpose of filter() method?',
        options: ['Transform array', 'Filter elements based on condition', 'Sort array', 'Count elements'],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'What is IIFE in JavaScript?',
        options: ['Immediately Invoked Function Expression', 'Internal Function Expression', 'Inline Function', 'Inherited Function'],
        correctAnswer: 0
      },
      {
        id: 14,
        question: 'What is the purpose of bind() method?',
        options: ['Bind variables', 'Create bound function with specific this', 'Bind events', 'Bind objects'],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'What is the difference between call() and apply()?',
        options: ['No difference', 'call takes arguments separately, apply takes array', 'apply is faster', 'call is deprecated'],
        correctAnswer: 1
      },
      {
        id: 16,
        question: 'What is event delegation?',
        options: ['Delegating tasks', 'Single event listener for multiple elements', 'Removing events', 'Creating events'],
        correctAnswer: 1
      },
      {
        id: 17,
        question: 'What is the purpose of reduce() method?',
        options: ['Reduce array size', 'Reduce array to single value', 'Filter array', 'Sort array'],
        correctAnswer: 1
      },
      {
        id: 18,
        question: 'What is a generator function?',
        options: ['Function that generates code', 'Function that can pause/resume', 'Function that creates objects', 'Async function'],
        correctAnswer: 1
      },
      {
        id: 19,
        question: 'What is the purpose of Object.freeze()?',
        options: ['Stop execution', 'Make object immutable', 'Freeze UI', 'Prevent errors'],
        correctAnswer: 1
      },
      {
        id: 20,
        question: 'What is WeakMap in JavaScript?',
        options: ['Weak reference map', 'Small map', 'Temporary map', 'Slow map'],
        correctAnswer: 0
      }
    ]
  },
  React: {
    practice: [
      {
        id: 1,
        question: 'What is React?',
        options: ['A JavaScript library', 'A programming language', 'A database', 'A framework'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax', 'JSON Extended', 'JavaScript Extension'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'What is a React component?',
        options: ['A function or class', 'A variable', 'A CSS file', 'An HTML file'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'What is the purpose of useState hook?',
        options: ['Create variables', 'Manage component state', 'Handle events', 'Render components'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is props in React?',
        options: ['Properties passed to components', 'State variables', 'Events', 'Styles'],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'What is the Virtual DOM?',
        options: ['Real DOM', 'Lightweight copy of DOM', 'Database', 'Server'],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'What is the purpose of useEffect hook?',
        options: ['Create effects', 'Handle side effects', 'Style components', 'Create animations'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'What is React Router used for?',
        options: ['Routing network requests', 'Client-side routing', 'API routing', 'File routing'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What is the key prop used for in lists?',
        options: ['Styling', 'Identification', 'Events', 'Navigation'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What is lifting state up in React?',
        options: ['Moving state to parent', 'Moving state to child', 'Deleting state', 'Creating state'],
        correctAnswer: 0
      }
    ],
    final: [
      {
        id: 1,
        question: 'What is the difference between state and props?',
        options: ['No difference', 'State is mutable, props are immutable', 'Props are mutable, state is immutable', 'Both are same'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is Context API used for?',
        options: ['Styling', 'Global state management', 'Routing', 'API calls'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is useCallback hook used for?',
        options: ['Create callbacks', 'Memoize functions', 'Handle events', 'Create components'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'What is useMemo hook used for?',
        options: ['Memorize code', 'Memoize expensive calculations', 'Create memos', 'Handle memory'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is React.memo()?',
        options: ['Create memo', 'Prevent unnecessary re-renders', 'Memorize values', 'Create components'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is useRef hook used for?',
        options: ['Create references', 'Access DOM elements and persist values', 'Reference files', 'Create variables'],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'What is controlled component?',
        options: ['Component with control', 'Form element controlled by React state', 'Restricted component', 'Protected component'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'What is reconciliation in React?',
        options: ['Conflict resolution', 'Process of updating Virtual DOM', 'Error handling', 'State management'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What are React Fragments?',
        options: ['Broken components', 'Group elements without extra DOM node', 'Component parts', 'Code pieces'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What is prop drilling?',
        options: ['Creating props', 'Passing props through multiple levels', 'Deleting props', 'Modifying props'],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'What is lazy loading in React?',
        options: ['Slow loading', 'Load components on demand', 'Delayed rendering', 'Lazy execution'],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'What is Suspense used for?',
        options: ['Suspending execution', 'Handle loading states', 'Create suspense', 'Pause components'],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'What is useReducer hook used for?',
        options: ['Reduce state', 'Complex state management', 'Reduce components', 'Optimize code'],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'What is Error Boundary?',
        options: ['Error limit', 'Component catching errors in children', 'Error message', 'Error prevention'],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'What is the purpose of componentDidMount?',
        options: ['Mount component', 'Lifecycle method after mount', 'Create component', 'Render component'],
        correctAnswer: 1
      },
      {
        id: 16,
        question: 'What is HOC in React?',
        options: ['High Order Component', 'Component that takes component and returns enhanced component', 'Higher Component', 'Host Component'],
        correctAnswer: 1
      },
      {
        id: 17,
        question: 'What is render props pattern?',
        options: ['Rendering properties', 'Component sharing code via prop that is function', 'Prop rendering', 'Property pattern'],
        correctAnswer: 1
      },
      {
        id: 18,
        question: 'What is useLayoutEffect?',
        options: ['Layout hook', 'Runs before browser paint', 'Create layout', 'Handle layout'],
        correctAnswer: 1
      },
      {
        id: 19,
        question: 'What is StrictMode in React?',
        options: ['Strict checking', 'Tool for highlighting problems', 'Strict typing', 'Error mode'],
        correctAnswer: 1
      },
      {
        id: 20,
        question: 'What is synthetic event in React?',
        options: ['Fake event', 'Cross-browser wrapper for native events', 'Simulated event', 'Generated event'],
        correctAnswer: 1
      }
    ]
  },
  DBMS: {
    practice: [
      {
        id: 1,
        question: 'What does DBMS stand for?',
        options: ['Database Management System', 'Data Base Managing Software', 'Digital Base Management', 'Database Monitoring System'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'What is a primary key?',
        options: ['First key', 'Unique identifier for record', 'Important key', 'Master key'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is SQL?',
        options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'What is normalization?',
        options: ['Making normal', 'Organizing data to reduce redundancy', 'Data validation', 'Data formatting'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is a foreign key?',
        options: ['External key', 'Reference to primary key in another table', 'Secondary key', 'Backup key'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is ACID in database?',
        options: ['Atomic, Consistent, Isolated, Durable', 'All Changes In Database', 'Automatic Checking In Database', 'Advanced Connection In Database'],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'What is a join in SQL?',
        options: ['Joining tables', 'Combining rows from tables', 'Merging databases', 'Connecting servers'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'What is an index in database?',
        options: ['Table list', 'Data structure for faster retrieval', 'Database catalog', 'Table reference'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What is a view in SQL?',
        options: ['Viewing data', 'Virtual table', 'Database window', 'Data display'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What is a transaction?',
        options: ['Data transfer', 'Unit of work in database', 'Database operation', 'SQL command'],
        correctAnswer: 1
      }
    ],
    final: [
      {
        id: 1,
        question: 'What is 1NF (First Normal Form)?',
        options: ['First format', 'Atomic values in columns', 'First normalization', 'Primary form'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is denormalization?',
        options: ['Removing normalization', 'Adding redundancy for performance', 'Breaking normalization', 'Reversing normalization'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is a stored procedure?',
        options: ['Stored data', 'Precompiled SQL statements', 'Backup procedure', 'Save operation'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'What is a trigger in database?',
        options: ['Start button', 'Automatic execution on event', 'Error handler', 'Database function'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is deadlock in database?',
        options: ['Locked database', 'Two transactions waiting for each other', 'Database crash', 'Lock error'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is a composite key?',
        options: ['Mixed key', 'Multiple columns as primary key', 'Combined key', 'Double key'],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'What is INNER JOIN?',
        options: ['Internal join', 'Returns matching rows from both tables', 'Join inside table', 'Primary join'],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'What is LEFT JOIN?',
        options: ['Left side join', 'All rows from left table with matches from right', 'Join to left', 'First table join'],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What is a clustered index?',
        options: ['Grouped index', 'Determines physical order of data', 'Multiple indexes', 'Indexed cluster'],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What is a non-clustered index?',
        options: ['Separate index', 'Logical ordering separate from physical', 'Ungrouped index', 'Secondary index'],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'What is a candidate key?',
        options: ['Potential key', 'Column that can be primary key', 'Key candidate', 'Optional key'],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'What is referential integrity?',
        options: ['Data reference', 'Foreign key constraint validity', 'Reference checking', 'Data integrity'],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'What is a subquery?',
        options: ['Sub command', 'Query within another query', 'Small query', 'Query part'],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'What is GROUP BY clause?',
        options: ['Grouping data', 'Aggregate rows with same values', 'Create groups', 'Sort by group'],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'What is HAVING clause?',
        options: ['Having condition', 'Filter after GROUP BY', 'Conditional clause', 'Having check'],
        correctAnswer: 1
      },
      {
        id: 16,
        question: 'What is cardinality in database?',
        options: ['Card number', 'Uniqueness of data values', 'Data count', 'Column number'],
        correctAnswer: 1
      },
      {
        id: 17,
        question: 'What is a schema?',
        options: ['Plan', 'Logical structure of database', 'Database design', 'Table structure'],
        correctAnswer: 1
      },
      {
        id: 18,
        question: 'What is data integrity?',
        options: ['Data accuracy', 'Accuracy and consistency of data', 'Data validation', 'Data quality'],
        correctAnswer: 1
      },
      {
        id: 19,
        question: 'What is a cursor in SQL?',
        options: ['Pointer', 'Database object for row-by-row processing', 'Mouse cursor', 'Data pointer'],
        correctAnswer: 1
      },
      {
        id: 20,
        question: 'What is concurrency control?',
        options: ['Control access', 'Managing simultaneous operations', 'Access control', 'Database control'],
        correctAnswer: 1
      }
    ]
  }
};

// Mock Exam Schedule
export const examSchedule = [
  {
    id: 1,
    course: 'Full-Stack Development',
    subject: 'JavaScript',
    examType: 'Practice Test',
    date: '2026-02-05',
    time: '10:00 AM',
    duration: '30 minutes',
    status: 'upcoming'
  },
  {
    id: 2,
    course: 'Full-Stack Development',
    subject: 'React.js',
    examType: 'Practice Test',
    date: '2026-02-08',
    time: '11:00 AM',
    duration: '30 minutes',
    status: 'upcoming'
  },
  {
    id: 3,
    course: 'Full-Stack Development',
    subject: 'DBMS',
    examType: 'Practice Test',
    date: '2026-02-12',
    time: '02:00 PM',
    duration: '30 minutes',
    status: 'upcoming'
  },
  {
    id: 4,
    course: 'Full-Stack Development',
    subject: 'JavaScript',
    examType: 'Final Exam',
    date: '2026-02-20',
    time: '10:00 AM',
    duration: '60 minutes',
    status: 'upcoming'
  },
  {
    id: 5,
    course: 'Full-Stack Development',
    subject: 'React.js',
    examType: 'Final Exam',
    date: '2026-02-22',
    time: '10:00 AM',
    duration: '60 minutes',
    status: 'upcoming'
  },
  {
    id: 6,
    course: 'Full-Stack Development',
    subject: 'DBMS',
    examType: 'Final Exam',
    date: '2026-02-25',
    time: '10:00 AM',
    duration: '60 minutes',
    status: 'upcoming'
  }
];

// Initial Mock Results Data
export const initialResults = [
  {
    userId: 1,
    studentName: 'Akshada Vaibhav Chilwar',
    subject: 'DBMS',
    examType: 'Final Exam',
    marks: 88,
    totalQuestions: 20,
    attempted: 20,
    date: '01/28/2025',
    time: '09:00 AM',
    timestamp: '2025-01-28T09:00:00.000Z'
  },
  {
    userId: 2,
    studentName: 'Deepika Rajendra Nikam',
    subject: 'DBMS',
    examType: 'Final Exam',
    marks: 90,
    totalQuestions: 20,
    attempted: 20,
    date: '01/29/2025',
    time: '09:00 AM',
    timestamp: '2025-01-29T09:00:00.000Z'
  },
  {
    userId: 3,
    studentName: 'Harshada Santosh Magar',
    subject: 'React',
    examType: 'Final Exam',
    marks: 80,
    totalQuestions: 20,
    attempted: 20,
    date: '10/29/2025',
    time: '05:00 PM',
    timestamp: '2025-10-29T17:00:00.000Z'
  },
  {
    userId: 4,
    studentName: 'Rutika Namdev Kadam',
    subject: 'React',
    examType: 'Final Exam',
    marks: 80,
    totalQuestions: 20,
    attempted: 20,
    date: '08/20/2025',
    time: '05:00 PM',
    timestamp: '2025-08-20T17:00:00.000Z'
  },
  {
    userId: 5,
    studentName: 'Prajakta Mahendra Patole',
    subject: 'JavaScript',
    examType: 'Practice Test',
    marks: 76,
    totalQuestions: 10,
    attempted: 10,
    date: '11/19/2025',
    time: '10:00 AM',
    timestamp: '2025-11-19T10:00:00.000Z'
  },
  {
    userId: 6,
    studentName: 'John Narayan Tirupathi',
    subject: 'JavaScript',
    examType: 'Practice Test',
    marks: 25,
    totalQuestions: 10,
    attempted: 10,
    date: '11/19/2025',
    time: '10:00 AM',
    timestamp: '2025-11-19T10:00:00.000Z'
  }
];

// Get stored results or initialize with initial data
export const getStoredResults = () => {
  const stored = localStorage.getItem('examResults');
  if (stored) {
    return JSON.parse(stored);
  } else {
    // First time - initialize with mock data
    localStorage.setItem('examResults', JSON.stringify(initialResults));
    return initialResults;
  }
};

// Save result to localStorage
export const saveResult = (result) => {
  const results = getStoredResults();
  results.push(result);
  localStorage.setItem('examResults', JSON.stringify(results));
};

// Get results for specific user
export const getUserResults = (userId) => {
  const results = getStoredResults();
  return results.filter(result => result.userId === userId);
};
