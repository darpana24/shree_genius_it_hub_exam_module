import React from "react";
import '../css/style.css'
function App(){
    return(
        <div>
        <h1 style={{textAlign:"center", }}>📅 Exams Schedule</h1>
      
        <table border="5">
           <thead className="table-heading" style={{borderCollapse:"collapse", borderBlockColor: "#478fe8"}} >
            <th >Date</th>
            <th>Time</th>
            <th>Course</th>
            <th>Subject</th>
            <th>Exam Type</th>
           </thead>

           <tbody style={{borderBlockColor: "#478fe8"
            
           }}>
            <td >25 Mar 2026</td>
            <td>  10:00 AM – 11:30 AM</td>
            <td>Fullstack</td>
            <td>  JavaScript</td>
            <td> MCQ</td>
           </tbody>

             <tbody>
            <td>27 Mar 2026</td>
            <td>  09:30 AM – 11:00 AM</td>
            <td>Fullstack</td>
            <td>React.js</td>
            <td>Written</td>
           </tbody>

            <tbody>
            <td>29 Mar 2026</td>
            <td>  10:00 AM – 12:00 AM</td>
            <td>Fullstack</td>
            <td>  DBMS</td>
            <td>Practical</td>
           </tbody>

        </table>
        </div>
    );
}

export default App;