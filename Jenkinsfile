pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Stop service') {
            steps {
                sh 'pm2 stop gamax'
            }
        }
        stage('Delete files') {
            steps {
                sh 'rm -rf /var/www/nextjs/gamax'
            }
        }
        stage('Copy files') {
            steps {
                sh 'cp -R /var/lib/jenkins/workspace/gamax /var/www/nextjs/'
                sh 'cp /var/www/.env /var/www/nextjs/gamax/'
            }
        }
        stage('Build') {
            steps {
                sh 'cd /var/www/nextjs/gamax/ && npm install'
                sh 'cd /var/www/nextjs/gamax/ && npm run build'
            }
        }
        stage('Start service') {
            steps {
                sh 'pm2 start nextjs'
            }
        }
    }
}