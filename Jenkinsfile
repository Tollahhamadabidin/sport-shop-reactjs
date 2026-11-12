pipeline {
    agent any

    environment {
        DH_IMAGE = "sport-shop"
        TAG = "v1.0.2026"
        FULL_IMAGE = "${DH_IMAGE}:${TAG}"
    }

    stages {
        stage('Verify Frontend (Node)') {
            steps {
                echo "Verifying Frontend Environment..."
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('SonarQube Code Analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonarqube') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                              -Dsonar.projectKey=sport-shop-reactjs \
                              -Dsonar.projectName=sport-shop-reactjs \
                              -Dsonar.sources=. \
                              -Dsonar.exclusions=node_modules/**,dist/**,build/**
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deployment Approval Gate') {
            steps {
                script {
                    env.DEPLOY_ENV = input(
                        message: 'Approve Deployment?',
                        ok: 'Deploy Now',
                        parameters: [
                            choice(
                                name: 'DEPLOY_TARGET',
                                choices: ['Staging', 'Production'],
                                description: 'Choose target deployment environment'
                            )
                        ]
                    )
                    echo "Target Environment Selected: ${env.DEPLOY_ENV}"
                }
            }
        }

        stage('Execute Deployment') {
            steps {
                script {
                    if (env.DEPLOY_ENV == 'Production') {
                        echo "Executing Deployment to Production..."
                        sh """
                            docker build -t ${FULL_IMAGE} -f prod.Dockerfile .
                            docker rm -f sport-shop-prod || true
                            docker run -dp 3000:80 --name sport-shop-prod ${FULL_IMAGE}
                        """
                    } else if (env.DEPLOY_ENV == 'Staging') {
                        echo "Executing Deployment to Staging..."
                        sh """
                            docker build -t ${FULL_IMAGE} -f prod.Dockerfile .
                            docker rm -f sport-shop-staging || true
                            docker run -dp 3005:80 --name sport-shop-staging ${FULL_IMAGE}
                        """
                    }
                }
            }
        }
    }
}
