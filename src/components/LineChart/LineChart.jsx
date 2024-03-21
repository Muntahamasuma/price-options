import { LineChart as LChart, Line, BarChart, CartesianGrid, XAxis,YAxis,Tooltip,Legend,Bar } from "recharts";

const LineChart = () => {

   const mathMarks=[
    {
      "student": "John Doe",
      "marks": {
        "math": 80,
        "history": 70,
        "science": 85
      }
    },
    {
      "student": "Jane Smith",
      "marks": {
        "math": 85,
        "history": 75,
        "science": 88
      }
    },
    {
      "student": "Michael Johnson",
      "marks": {
        "math": 70,
        "history": 80,
        "science": 72
      }
    },
    {
      "student": "Emily Davis",
      "marks": {
        "math": 92,
        "history": 85,
        "science": 90
      }
    },
    {
      "student": "William Brown",
      "marks": {
        "math": 75,
        "history": 72,
        "science": 78
      }
    },
    {
      "student": "Olivia Wilson",
      "marks": {
        "math": 88,
        "history": 90,
        "science": 85
      }
    },
    {
      "student": "James Taylor",
      "marks": {
        "math": 78,
        "history": 88,
        "science": 80
      }
    },
    {
      "student": "Sophia Martinez",
      "marks": {
        "math": 83,
        "history": 85,
        "science": 82
      }
    },
    {
      "student": "Benjamin Anderson",
      "marks": {
        "math": 90,
        "history": 82,
        "science": 88
      }
    },
    {
      "student": "Mia Thomas",
      "marks": {
        "math": 85,
        "history": 78,
        "science": 80
      }
    }
  ]
  
  

    return (
        <div>
            <LChart width={500} height={500} data={mathMarks}>
                <Line dataKey="marks.math" stroke="red"></Line>
                <Line dataKey="marks.science" stroke="blue"></Line>
            </LChart>

            <BarChart width={730} height={250} data={mathMarks}>
            <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="student" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="marks.history" fill="#8884d8" />
  <Bar dataKey="marks.science" fill="#82ca9d" />
            </BarChart>
        </div>
        
    );
};

export default LineChart;