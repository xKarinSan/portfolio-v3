# 💼 Portfolio Site (2024 Version)
This is the 2024 version of my portfolio site which I used ReactJS, Vite and ExpressJS (Typescript) to build, while experimenting on the NotionAPI to fetch data. Not only that, but this entire site is deployed on AWS.

## ❓ Why did I use Notion Database instead of other databases?
This is because you can access your notion databases through your Notion app (thus removing the need of building an admin interface from scratch). This would allow you to maintain your skills, projects and contents more easily.

## 🏗 Architecture Diagram 
Work in progress

## 🤖 Tech Stacks
<p align="left">
  <img src ="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React Logo" height="80px"/>
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" height="80px"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqepJcsF1PaiUR58G-zfvfaYwq7zWqbVhXOqmOwT6Gw&s" alt="ExpressJS Logo" height="80px"/>
  <img src="https://logowik.com/content/uploads/images/typescript2034.jpg" alt="Typescript Logo" height="80px"/>
  <img src="https://logowik.com/content/uploads/images/notion1411.jpg" alt="Notion Logo" height="80px"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/400px-Amazon_Lambda_architecture_logo.svg.png" alt="AWS Lambda Logo" height="80px"/>
  <img src="https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png" alt="Amazon API Gateway Logo" height="80px"/>
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--mkZY0XpP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://day-journal.com/memo/images/logo/aws/amplify.png" alt="AWS Amplify Logo" height="80px"/>
</p>

## 👷‍♂️ Setup
### Frontend
1. Go to the frontend directory
```
cd frontend
```
2. Install all the dependencies
```
npm i
```
3. Run the frontend
```
npm run dev 
```

### Backend 
1. Go to the backend directory
```
cd backend
```
2. Install all the dependencies
```
npm i
```
3. Run the backend
```
npm run start:dev
```

## 🌴 Environment variables
### Frontend
**NOTE: remember to put this inside your environmental variables when you deploy it on AWS Amplify**
```
VITE_API_LINK = <your_backend_deployed_link>
```
### Backend 
```
NOTION_TOKEN = <your_notion_api_token>
NOTION_USER_ID = <your_notion_user_id>
NOTION_DATABASE_PROJECTS = <your_projects_database_id>
NOTION_DATABASE_EXPERIENCES = <your_experiences_database_id>
NOTION_DATABASE_SKILLS = <your_skills_database_id>

```

## 🫙 Notion Database Schemas
### Projects
| Attribute Name | Attribute type (follows notion's types) | Description |
| -------------- | ------------------------------------ | ----------- |
| name | text | The name of your project. |
| year | number | The year which you started the project. |
| imageUrl | text | The image URL of a screenshot of your project. |
| toFeature | checkbox | Tick to feature the project in your landing page. | 
| techStacks | multi-select | The tech stacks (languages, frameworks, etc) you used to build your project. | 
| repoLink | text | The link of your project's Github repository. | 
| description | text | A brief description of your project. | 
| projectType | multi-select | The type of project. Ie: School, hackathons, personal, etc. | 

### Experiences
**NOTE: The date types format is 'relative' and its time format is '12 hour'**
| Attribute Name | Attribute type (follows notion's types) | Description |
| -------------- | ------------------------------------ | ----------- |
| roleName | text | The name of your role during the experience. |
| experienceType | multi-select | The type of experience. Whether it is part-time or full-time and/or an internship or a full-time work position. | 
| companyName | text | The name of the company you worked with or are working with. | 
| techStacks | multi-select | The tech stacks (languages, frameworks, etc) you used in your work experience. | 
| startDate | date | The starting date of your work. |
| endDate | date | The ending date of your work. |
| description | text | A brief description of your contributions during your work period. | 

### Skills
**NOTE: The skills here are in terms of tech stacks you have learnt or used**
| Attribute Name | Attribute type (follows notion's types) | Description |
| -------------- | ------------------------------------ | ----------- |
| name | text | The name of the skill/tech stack. |
| logoUrl | text | The image URL of a logo of the tech stack. |
| toFeature | checkbox | Tick to feature the skill/tech stack in your landing page. |

## Backend routes
**NOTE: These routes are based on my own use case so far. Feel free to change them based on your needs**
| Route | Method | Description |
| ----- | ------ | ----------- |
| / | GET | Checks whether the server is running properly |
| /landing | GET | Retrieves all the skills, experiences and projects at one go |
| /projects | GET | Retrieves all the projects from your notion database |
| /experiences | GET | Retrieves all your past job experiences from your notion database |
| /skills | GET | Retrieves all your skills from your notion database |

## 🚢 Deployment
### Frontend
1. Link your repository to AWS amplify and add the environment variables. Deployment is automatic.

### Backend
**NOTE: Credits to this article [here](https://dev.to/aws-builders/creating-a-serverless-api-using-aws-lambda-and-nodejs-with-typescript-and-expressjs-4kfk).**
1. Install serverless. (I am assuming you are already in the backend directory)
```
npm i -g serverless
```
2. Configure the serverless credentials (You can get them by creating a key-value pair using AWS IAM)
```
serverless config credentials --provider aws --key <your_iam_key> --secret <your_iam_secret>

```
4. Deploy!
**Note: This depends on your serverless.yml contents**
```
serverless deploy
```
