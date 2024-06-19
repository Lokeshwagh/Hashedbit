
function calculateAverages(students) {
    return students.map((student) => {
      // Get the values (marks) of each student object and calculate the average
      const marks = Object.values(student);
      const total = marks.reduce((sum, mark) => sum + mark, 0);
      const average = total / marks.length;
  
      // Return a new object with the student's name and their average
      return { average: average };
    });
  }
  const input = [
    {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
    {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
    {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  ];
  
  console.log(calculateAverages(input));
  
  // Output: [ { average: 64.2 }, { average: 64.2 }, { average: 64.2 } ]
  