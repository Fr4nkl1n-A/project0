pipeline {
    agent any
    
    stages {
        stage ('Checkout') {
            steps {
                git 'https://github.com/Fr4nkl1n-A/project0.git'
            }
        }
        
        stage ('Build') {
            steps {
                sh 'docker build -t project0'
            }
        }
        
        stage ('deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 project0'
            }
        }
    }
}
