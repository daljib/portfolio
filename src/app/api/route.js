import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req){

    const { messages} = await req.json();

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    messages.unshift({
        role : 'system',
        content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:     
${dataResume}

Help users learn more about Dina's skills and experiences and how smart she is from her resume.`
    })

    // const messages = 
    // [
    //     {
    //         role: 'system',
    //         content: 'You are a helpful assisntant'
    //     },
    //     {
    //         role: 'user',
    //         content: 'Why is JavaScript better than Python?',
    //     }
    // ];

    

    const response = await client.getChatCompletions(model, messages, {maxToken: 128})
    return NextResponse.json({ 
        message: response.choices[0].message.content
    })
}

const dataResume = `Dina Al Jibori
Berkeley, CA 94704 |  daalj@berkeley.edu | (916) 475-2992 | Portfolio | GitHub 
Dina is a current student at UC Berkeley majoring in Computer Science! I have experience in Front End Devolpment, Machine Learning Models, Video Game Design, CyberSecurity and General Software Devolpment. I'm anticipated to graduate in December 2025!
I'm Dina Al Jibori, I'm a current Computer Science student at UC Berkeley! I'm currently looking for internships to further my experience in Software Devolpment. I'm very interested in Fullstack Devolpment, Machine Learning and CyberSecurity.

Over the summer, I have trained a Machine Learning Model using Python to predict the Winning team of a soccer game in the Premier League. I have also implemented an Azure AI chatbot that can answer any questions about my skills or professional experience for employers to use to learn more about me.

Dina is currently working on devoloping both the Frontend and Backend for a website for Folsom Lake’s College Women in CIS Group. In the coming Fall semester, I will also be tutoring Data Structures!
My interests are watching soccer games and drawing i especially love drawing portraits
Dina is best at Problem Solving, Teamwork, Product Management, Detail Oriented, Communication, Quick Learner and Time Management
She is born in Iraq and lived in jordan and moved to California in 2013
I hope to work in a company that is in the forefront of tech innovation where I can grow my skills and change people live's through tech witha hope to work in industry soon after graduation.
EDUCATION
University of California, Berkeley
B.A in Computer Science
Berkeley, CA
Expected Graduation: December 2025 
SKILLS
	Programming Languages: C++, Python, Java, R, Scheme and SQL, HTML, CSS  and C
	Technical: Object Oriented Programming, Debugging,  Software Development, Data Structures, UI/UX Design, Video Game Design,  and SQL Databases, Proficiency in MS Office (Word, Excel, PowerPoint) Outlook, Sharepoint, GIT and Publisher
	Soft Skills: Problem Solving, Teamwork, Product Management, Detail Oriented, Communication, Quick Learner  and Time Management
PROFESSIONAL EXPERIENCE

Link Health | https://link-health.org/
Contract Assistant Front End Developer
Berkeley, CA
most recent position
September 2023–January 2024 
	•	Designed comprehensive website layouts for both desktop and mobile applications using Figma, ensuring a cohesive and visually appealing user interface for various projects.
	•	Collaborated in the dynamic development of the user interface in a team of 2-3 people in PCS Club at UC Berkeley, a project designed to streamline signing up for US welfare programs. Worked on the Admin Page.
	•	Leveraged HTML and CSS to implement an elegant and responsive design, ensuring an intuitive and efficient user experience.
	•	Communicated with cross-functional teams, including policy and backend developers, to ensure seamless integration of front-end components. 
Sacramento Municipal Utility District
IT Business Relationship Management Intern
Sacramento, CA
November  2022–August 2023
	•	Strengthened communication and collaboration between IT and business units by initiating conversation regarding products, deliverables, promoting alignment and productivity across departments
	•	Collaborated with IT project managers and business stakeholders to define project scopes, developing timelines, managing data and ensuring timely completion of deliverables increasing efficiency
	•	Gathered feedback and implemented process enhancements, resulting in increased customer satisfaction and improved service quality.
	•	Streamlined collaboration using SharePoint, ServiceNow, Excel, and Microsoft Office Suite
Design Hub - American River College
Programming Assistant
Sacramento, CA
August 2021–April 2022
	•	Collaborated with Industry Partners in education to code industry projects aligned with their business objectives, revitalizing their educational initiatives.
	•	Designed and developed visually captivating User Interface components using Revit, Sketch-up, and other modeling systems, introducing innovative environments.
	•	Utilized Unity 3D and C# expertise to create an engaging educational video game, enhancing learning experiences for diverse audiences.
	•	Tested and debugged code meticulously to ensure seamless functionality and progression within coding projects, while contributing to a cohesive team effort of 5-7 members to deliver intricate projects within specified deadlines.
Dream Enrichment Classes
Code and Chess Instructor
Sacramento, CA
July 2021–January 2022
	•	Educated students on HoneyCode and Chess by applying a variety of instructional techniques, including a hands-on curriculum
	•	Instructed 12-15 students five times a week in order to build logistical skills early on.
	•	Observed other instructors and lecturers, gathering valuable techniques to be implemented into future lectures and courses.
	•	Established and optimized new curriculum and day-to-day instruction to align educational strategies with industry best practices

PROJECTS
Premier League Predictor : 
	•	Trained a Machine Learning Model using Python to predict the Winning team of a soccer game in the Premier League. Logistic regression is used to predict match outcomes based on historical data and various features.
Personal Portfolio Website:
	•	Crafted a dynamic portfolio website using HTML, CSS, and JavaScript for the FrontEnd and BackEnd functionalities, later migrating to React with Next.js (subset of Node.js). Incorporated Azure AI chatbot for interactive resume inquiries.
Wordnet : 
	•	Created a browser-based tool for exploring English word usage history, with Java back-end processing user inputs and generating outputs. It also is able to extract and display hyponyms from WordNet dataset using DFS in a BST interpretation of the Data.

EXTRACURRICULARS 
	•	Student Tutor for Data Structures and Algorithms at University of California, Berkeley
	•	Lead Translator for the Computer Literacy Camp serving refugee women and Lead Volunteer at the IT Girls Coding Camp at Folsom Lake College
	•	Created the Middle Eastern Cultural Heritage Camp with the Arab Community Center for Integration Services
	•	Member of Association of Women Engineers, Political Computer Science, Phi Theta Kappa; The Honor Society, FLC Coding++ Club
CERTIFICATIONS
Supervised Machine Learning: Regression and Classification				     	  	Stanford UniversityDina Al Jibori
Berkeley, CA 94704 |  daalj@berkeley.edu | (916) 475-2992 | Portfolio | GitHub 
EDUCATION
University of California, Berkeley
B.A in Computer Science
Berkeley, CA
Expected Graduation: December 2025 
SKILLS
	•	Programming Languages: C++, Python, Java, R, Scheme and SQL, HTML, CSS  and C
	•	Technical: Object Oriented Programming, Debugging,  Software Development, Data Structures, UI/UX Design, Video Game Design,  and SQL Databases, Proficiency in MS Office (Word, Excel, PowerPoint) Outlook, Sharepoint, GIT and Publisher
	•	Soft Skills: Problem Solving, Teamwork, Product Management, Detail Oriented, Communication, Quick Learner  and Time Management
PROFESSIONAL EXPERIENCE

Link Health | https://link-health.org/
Contract Assistant Front End Developer
Berkeley, CA
September 2023–January 2024 
	•	Designed comprehensive website layouts for both desktop and mobile applications using Figma, ensuring a cohesive and visually appealing user interface for various projects.
	•	Collaborated in the dynamic development of the user interface in a team of 2-3 people in PCS Club at UC Berkeley, a project designed to streamline signing up for US welfare programs. Worked on the Admin Page.
	•	Leveraged HTML and CSS to implement an elegant and responsive design, ensuring an intuitive and efficient user experience.
	•	Communicated with cross-functional teams, including policy and backend developers, to ensure seamless integration of front-end components. 
Sacramento Municipal Utility District
IT Business Relationship Management Intern
Sacramento, CA
November  2022–August 2023
	•	Strengthened communication and collaboration between IT and business units by initiating conversation regarding products, deliverables, promoting alignment and productivity across departments
	•	Collaborated with IT project managers and business stakeholders to define project scopes, developing timelines, managing data and ensuring timely completion of deliverables increasing efficiency
	•	Gathered feedback and implemented process enhancements, resulting in increased customer satisfaction and improved service quality.
	•	Streamlined collaboration using SharePoint, ServiceNow, Excel, and Microsoft Office Suite
Design Hub - American River College
Programming Assistant
Sacramento, CA
August 2021–April 2022
	•	Collaborated with Industry Partners in education to code industry projects aligned with their business objectives, revitalizing their educational initiatives.
	•	Designed and developed visually captivating User Interface components using Revit, Sketch-up, and other modeling systems, introducing innovative environments.
	•	Utilized Unity 3D and C# expertise to create an engaging educational video game, enhancing learning experiences for diverse audiences.
	•	Tested and debugged code meticulously to ensure seamless functionality and progression within coding projects, while contributing to a cohesive team effort of 5-7 members to deliver intricate projects within specified deadlines.
Dream Enrichment Classes
Code and Chess Instructor
Sacramento, CA
July 2021–January 2022
	•	Educated students on HoneyCode and Chess by applying a variety of instructional techniques, including a hands-on curriculum
	•	Instructed 12-15 students five times a week in order to build logistical skills early on.
	•	Observed other instructors and lecturers, gathering valuable techniques to be implemented into future lectures and courses.
	•	Established and optimized new curriculum and day-to-day instruction to align educational strategies with industry best practices

PROJECTS
Premier League Predictor : 
	•	Trained a Machine Learning Model using Python to predict the Winning team of a soccer game in the Premier League. Logistic regression is used to predict match outcomes based on historical data and various features.
Personal Portfolio Website:
	•	Crafted a dynamic portfolio website using HTML, CSS, and JavaScript for the FrontEnd and BackEnd functionalities, later migrating to React with Next.js (subset of Node.js). Incorporated Azure AI chatbot for interactive resume inquiries.
Wordnet : 
	•	Created a browser-based tool for exploring English word usage history, with Java back-end processing user inputs and generating outputs. It also is able to extract and display hyponyms from WordNet dataset using DFS in a BST interpretation of the Data.

EXTRACURRICULARS 
	•	Student Tutor for Data Structures and Algorithms at University of California, Berkeley
	•	Lead Translator for the Computer Literacy Camp serving refugee women and Lead Volunteer at the IT Girls Coding Camp at Folsom Lake College
	•	Created the Middle Eastern Cultural Heritage Camp with the Arab Community Center for Integration Services
	•	Member of Association of Women Engineers, Political Computer Science, Phi Theta Kappa; The Honor Society, FLC Coding++ Club
CERTIFICATIONS
Supervised Machine Learning: Regression and Classification				     	  	Stanford University`

