pipeline {
    agent {
        docker {
            image 'node:12.21-alpine3.10'
            args '-p 3000:3000'
        }
    }
    environment {
      CI = 'true'
      HOME = '.'
      npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test and Build') {
            parallel {
                stage('Run Tests') {
                    steps {
                      sh 'npm run test'
                    }
                }
                stage('Create Build Artifacts') {
                    steps {
                      sh 'npm run build'
                    }
                }
            }
        }

        stage('Production') {
            steps {
                withAWS(region:'eu-west-1',credentials:'yoyogiftscreds') {
                    s3Delete(bucket: 'yoyo-gifts-website', path:'**/*')
                    s3Upload(bucket: 'yoyo-gifts-website', workingDir:'build', includePathPattern:'**/*');
                }
            }
        }
    } 
}