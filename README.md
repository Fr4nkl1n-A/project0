# Deploying a Containerized Web Application with Jenkins

## Description
This project demonstrates the process of deploying a containerized web app using Docker and Jenkins on an AWS EC2 instance. This simple application provides a random quote when the button is clicked, and the CI/CD pipeline automates the build and deployment process.

## Features
- Automated build and deployment using Jenkins.
- Containerization with Docker for easy deployment and scalability.
- Live random quote application.

## Prerequisites
- Docker installed on your local machine.
- Jenkins server set up and running.
- Add Jenkins User to the Docker Group.

## Setup Instructions
- Jenkinsfile is available in repository. Just select *Pipeline script from SCM* in Pipeline Defination. 
- Repo URL: https://github.com/Fr4nkl1n-A/project0.git
- Leave the branch to *master*.
- ![image](https://github.com/user-attachments/assets/9f4e5761-141d-4817-962d-be8b544ebc69)
- To access the app, go to http://localhost:3000



## *Challenges Faced and Solutions*
###  *Automated Deployments*
  I set up a CI/CD pipeline in Jenkins that automatically builds and deploys whenever changes are *pushed* to the repository.
###  *Port Conflicts*
  After setting up the webhook when i pushed a change to the repository, the pipeline script didn't worked well. I analyzed the console output and found out as the previous container is running on the same port (3000) and it is not stopped and removed therefore
  the new container cant run on the same port. To fix this i updated the Jenkins file to stop & remove the existing container before running the new one.

## Completion Screenshots:
### Pipeline Execution Result:
  ![image](https://github.com/user-attachments/assets/93367c84-9a28-4a96-aa3d-9ac3378ccffb)
  ![image](https://github.com/user-attachments/assets/610915bc-cdfc-4b03-9c9c-eb374b92d9ad)
### Container Running Successfully:
  ![image](https://github.com/user-attachments/assets/b82f334c-038a-484e-887a-7fa155c68218)
### Webapp:
  ![image](https://github.com/user-attachments/assets/ba1b7a0a-bad2-40c1-9c14-d80b785358b8)
