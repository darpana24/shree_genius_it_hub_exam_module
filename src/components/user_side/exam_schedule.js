const ExamForm = () => {
  return (
    <div style={styles.body}>
      <div style={styles.examForm}>
        <h2 style={styles.heading}>Online Exam Form</h2>

        <form>
          <label style={styles.label}>Student Name</label>
          <input type="text" required style={styles.input} />

          <label style={styles.label}>Student ID</label>
          <input type="text" required style={styles.input} />

          <label style={styles.label}>Mother Name</label>
          <input type="text" required style={styles.input} />

          <label style={styles.label}>Subject</label>
          <select required style={styles.input}>
            <option value="">Select Subject</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Computer Science</option>
          </select>

          <label style={styles.label}>Exam Mode</label>
          <select style={styles.input}>
            <option>Online</option>
          </select>

          <label style={styles.checkboxLabel}>
            <input type="checkbox" /> Attend online exam (if applicable)
          </label>

          <button type="submit" style={styles.button}>
            Start Exam
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#1b0131",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  examForm: {
    width: "400px",
    marginTop: "50px",
    background: "#fff",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
  },
  checkboxLabel: {
    display: "block",
    marginTop: "15px",
  },
  button: {
    width: "100%",
    padding: "8px",
    marginTop: "15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default ExamForm;