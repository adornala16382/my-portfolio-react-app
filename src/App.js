import linkedInProfilePic from './images/Linkedin_headshot-min.jpg';
import linkedInLogo from './images/linkedin-logo.png';
import githubLogo from './images/github-logo.png';
import mailIcon from './images/mailIcon.png';
import './App.css';
import React, { useEffect, useState } from 'react';


function requestUserRepos(username){
  // call the fetch method, 
  // passing in the `username` arg to the request
  // create a variable to hold the `Promise` returned from `fetch`
  return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

function iterateMyGitHubInfo(){
  // call function, passing in any GitHub username as an arg
  return requestUserRepos('adornala16382')
    // parse response into json
    .then(response => response.json())
    // iterate through parsed response
    .then(data => {
      const githubInfoElements = []; // Array to hold JSX elements
      for (let i in data) {
        // Log the repo name
        console.log('Repo:', data[i].name);
  
        // Log the repo description
        console.log('Description:', data[i].description);
  
        // Log the repo url
        console.log('URL:', data[i].html_url);
        
        // Add a separator between each repo
        console.log('=========================')
        
        
        const element = returnMyGithubInfo(data[i].name, data[i].description, data[i].html_url);
        githubInfoElements.push(element);
      }
      return githubInfoElements; // Return the array of JSX elements
    });
}

function returnMyGithubInfo(name, description, url){
  return (
    <div className="project-container">
        <h3 className="project-name"><a className="project-name" href={url} target="_blank" rel="noreferrer">{name}</a></h3>
        <p className="project-description">{description}</p>
    </div>
  );
}

function App() {
  const [githubInfo, setGithubInfo] = useState([]);

  useEffect(() => {
    iterateMyGitHubInfo().then(data => {
      setGithubInfo(data);
    });
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    const resumeCss = document.querySelector('.resume');
    const appHeaderCss = document.querySelector('.App-header');
    const aboutMeCss = document.querySelector('.about-me');
    const projectSectionCss = document.querySelector('.project-section');
    if(isChecked){
      resumeCss.style.backgroundColor = '#9DB2BF';
      resumeCss.style.color = 'black';
      resumeCss.style.borderColor = 'black';
      appHeaderCss.style.backgroundColor = '#27374D';
      aboutMeCss.style.backgroundColor = '#526D82';
      projectSectionCss.style.backgroundColor = '#526D82';
    }
    else{
      resumeCss.style.backgroundColor = '#12171e';
      resumeCss.style.color = 'white';
      resumeCss.style.borderColor = 'white';
      appHeaderCss.style.backgroundColor = '#12171e';
      aboutMeCss.style.backgroundColor = '#171e24';
      projectSectionCss.style.backgroundColor = '#171e24';
    }
  };

  return (
    <div className="App">
      <div className="wrapper">

        <header className="App-header">
          <p className="body"><strong> Dark Mode Toggle</strong></p>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          <div className="grow">
            <div className="circular-portrait">
              <img src={linkedInProfilePic} alt="linkedIn headshot" />
            </div>
          </div>
          <h2 className="main-title">Aryan Dornala</h2>
        </header>

        <div className="about-me">
          <h3 className="about-me-title">About Me</h3>
          <p className="about-me-description">Hey, I'm Aryan Dornala. I am a student at Rutgers University currently studying Computer Science (major) and Data Science (minor)</p>
          <div className="grow">
            <a href="https://www.linkedin.com/in/aryandornala/" target="_blank" rel="noreferrer"><img className="social" src={linkedInLogo} alt="linkedIn logo"></img></a>
            <a href="https://github.com/adornala16382" target="_blank" rel="noreferrer"><img className="social" src={githubLogo} alt="github logo"></img></a>
            <a href="mailto:aryand8402@gmail.com" target="_blank" rel="noreferrer"><img className="social" src={mailIcon} alt="mail icon"></img></a>
          </div>
        </div>

        <div className="resume">
          <div className="resume-wrapper">
            <h3 className="section-title">Education</h3>
            <hr className="divider"></hr>
              <h4 className="subSection-title">Rutgers University - New Brunswick</h4>
              <p className="italics">Computer Science B.S., Data Science Minor</p>
                <p className="body">• <strong>Honors:</strong> Deans List (5x), AP Scholar with Distinction</p>
                <p className="body">• <strong>Relevant Coursework:</strong></p>
                  <p className="bodyOneTab">• <strong>Computer Science:</strong> Data Structures, Computer Architecture, Design and Analysis of Computer Algorithms, Software Methodology, Principles of Programming Languages, Systems Programming</p>
                  <p className="bodyOneTab">• <strong>Data Science:</strong> Statistics I & II, Regression Methods, Data Management for Data Science, Principles of Information and Data Management, Introduction to AI</p>

            <h3 className="section-title">Experience</h3>
            <hr className="divider"></hr>
              <h4 className="subSection-title">Amazon Web Services (AWS)</h4>
                <p className="italics">Software Development Engineering Intern</p>
                  <p className="body">• Created scalable POC internal tool to aggregate live data on multiple fields to help developers identify trends and key issues in real-time</p>
              <h4 className="subSection-title">Ultimate Kronos Group (Ultimate Software)</h4>
                <p className="italics">Software Engineering Intern</p>
                  <p className="body">• Implemented a new parameter that allows for performance improvements in timecard service by allowing calculations for employee accrued time validation to be disabled, reducing average user wait time by 12% when totals are calculated</p>
                  <p className="body">• Fixed a defect causing a regression in timecard service preventing timecards from being approved by managers</p>
                  <p className="body">• Created efficient automated testing for REST API to ensure feature toggle behavior matched with expected behavior</p>
              <h4 className="subSection-title">Colgate-Palmolive </h4>
                <p className="italics">Software Engineering Intern</p>
                  <p className="body">• Delivered sorting functionality for the trade promotion data grid in the internal customer collaboration tool for 100+ stores, drastically increasing the speed to find trade promotions for product owners</p>
                  <p className="body">• Provided performance metrics in customer collaboration tool through KPI Dashboard for 20+ API’s</p>
              <h4 className="subSection-title">Colgate-Palmolive </h4>
                <p className="italics">Data Engineering Intern</p>
                  <p className="body">• Built out infrastructure around an internal tool I developed to load and transform custom data from a google sheet into internal data catalog Web-App by creating containerized scripts to load data from GCS Bucket into graph database</p>
                  <p className="body">• Implemented a PII layer on internal data catalog Web-App utilized by 10,000+ datasets to allow employees to save 2+ hours getting access to data while also preventing sensitive information from being leaked</p>
                  <p className="body">• Created in-house web app allowing employees to view dynamically loaded project documents from GCS Bucket</p>

            <h3 className="section-title">Projects</h3>
            <hr className="divider"></hr>
              <h4 className="subSection-title">Bidding Site</h4>
                <p className="body">• Created web application similar to eBay where users can mock buy/sell vehicles through bidding/auctioning</p>
                <p className="body">• Led team of two students to maintain version control through GitHub to ensure continuous development</p>
              <h4 className="subSection-title">A-star visualization  </h4>
                <p className="body">• Visualized and implemented A-star algorithm solving a random maze along with aggregating statistics for various optimizations</p>

            <h3 className="section-title">Extra-Curricular Activities</h3>
            <hr className="divider"></hr>
              <h4 className="subSection-title">Rutgers Hackathon—Health Track Winner</h4>
                <p className="body">•	Created a POC health application with a team of three to help runners match AI recommended Spotify music with heart rate</p>
              <h4 className="subSection-title">Rutgers Enactus Club</h4>
                <p className="body">•	Worked with a team of four to develop a fully functional and user-friendly website dedicated to reducing recidivism rates through employment and mentorship for people who were formerly incarcerated</p>

            <h3 className="section-title">Skills</h3>
            <hr className="divider"></hr>
              <h4 className="subSection-title">Programming Languages: </h4>
                <p className="body">•	Python, Java, C, HTML, CSS, JavaScript/Typescript, SQL, Haskell</p>
              <h4 className="subSection-title">Technologies: </h4>
                <p className="body">•	Git/GitHub, Docker, Kubernetes, Postman, Jenkins, Rest-Assured, GCP, AWS</p>
          </div>

          <div className="project-section">
            <h3 className="project-title">My projects</h3>
            <p className="about-me-description">The following are dynamically loaded from my github!</p>
            {githubInfo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
