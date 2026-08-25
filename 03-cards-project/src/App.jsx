
import Card from './components/Card'

const App = (props) => {

  const jobs = [
  {
    companyLogo: "https://tse2.mm.bing.net/th/id/OIP.lMlehYqlWlrzobTtzJ6fpAHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Google",
    post: "Frontend Developer",
    timeline: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "New York, NY"
  },
  {
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.lXwpAA8-BKb29XcGVOe1DAAAAA?r=0&pid=Api&P=0&h=180",
    companyName: "Microsoft",
    post: "React Developer",
    timeline: "1 week ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$95/hr",
    location: "Seattle, WA"
  },
  {
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?pid=Api&rs=1&c=1&qlt=95&w=205&h=115",
    companyName: "Amazon",
    post: "MERN Stack Developer",
    timeline: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$110/hr",
    location: "Austin, TX"
  },
  {
    companyLogo: "https://tse1.mm.bing.net/th/id/OIP.diiAsv-H9N1Or-DhADwT0wHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Meta",
    post: "UI/UX Developer",
    timeline: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$85/hr",
    location: "Menlo Park, CA"
  },
  {
    companyLogo: "https://tse4.mm.bing.net/th/id/OIP.FA3F_aKy1LXCHtwUMURcSAHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Netflix",
    post: "Frontend Engineer",
    timeline: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$150/hr",
    location: "Los Angeles, CA"
  },
  {
    companyLogo: "https://tse3.mm.bing.net/th/id/OIP.tCDtF7IQIkf16cut-TnIswHaEo?r=0&pid=Api&P=0&h=180",
    companyName: "Adobe",
    post: "React.js Developer",
    timeline: "1 week ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    salary: "$90/hr",
    location: "San Jose, CA"
  },
  {
    companyLogo: "https://tse2.mm.bing.net/th/id/OIP.5ZReGq2orKiicFpzn5DD5QHaDt?r=0&pid=Api&P=0&h=180",
    companyName: "IBM",
    post: "Software Developer",
    timeline: "4 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$105/hr",
    location: "Boston, MA"
  },
  {
    companyLogo: "https://tse4.mm.bing.net/th/id/OIP.gNVJrkIdsU8cAVC_FdRSVAHaHa?r=0&pid=Api&P=0&h=180",
    companyName: "Spotify",
    post: "Web Developer",
    timeline: "6 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$80/hr",
    location: "New York, NY"
  },
  {
    companyLogo: "https://tse3.mm.bing.net/th/id/OIP.ecPm6e2Got4T5_EGEC3trwHaEJ?r=0&pid=Api&P=0&h=180",
    companyName: "Oracle",
    post: "Full Stack Developer",
    timeline: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$125/hr",
    location: "Austin, TX"
  },
  {
    companyLogo: "https://tse4.mm.bing.net/th/id/OIP.m62B2h9u5TYcp66tgsWYGwHaFL?r=0&pid=Api&P=0&h=180",
    companyName: "Salesforce",
    post: "JavaScript Developer",
    timeline: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$88/hr",
    location: "San Francisco, CA"
  }
];

  return (

    <div className="parent">
      {jobs.map(function(elem){
        return <Card company={elem.companyName} companyLogo={elem.companyLogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} timeline={elem.timeline} location={elem.location} />
      })}
    </div>

  )
}

export default App