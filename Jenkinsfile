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
                sh 'docker build -t project0 .'
            }
        }
        
        stage ('deploy') {
            steps {
		script {
			// stop and remove existing container
			sh 'docker ps -q --filter "name=project0" | xargs --no-run-if-empty docker stop'
			sh 'docker ps -aq --filter "name=project0" | xargs --no-run-if-empty docker rm'
                	
			// run the container again
			sh 'docker run -d --name project0 -p 3000:3000 project0'
		}
            }
        }
    }
}
