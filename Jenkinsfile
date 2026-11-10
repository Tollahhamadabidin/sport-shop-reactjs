pipeline {
    agent any

    environment {
        DH_IMAGE = "sport-shop"
        TAG = "v1.0.2026"
        FULL_IMAGE = "${DH_IMAGE}:${TAG}"
        DEPLOY_ENV = ""
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
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Deployment Approval Gate') {
            steps {
                script {
                    DEPLOY_ENV = input(
                        id: 'DeployGate',
                        message: 'Approve Deployment?',
                        parameters: [
                            choice(
                                name: 'Select deployment environment',
                                choices: ['Staging', 'Production'],
                                description: 'Choose target deployment environment'
                            )
                        ]
                    )
                    echo "Target Environment Selected: ${DEPLOY_ENV}"
                }
            }
        }

        stage('Execute Deployment') {
            steps {
                script {
                    if (DEPLOY_ENV == 'Production') {
                        echo "Executing Deployment to Production..."
                        sh """
                            docker build -t ${FULL_IMAGE} -f prod.Dockerfile .
                            docker rm -f sport-shop-prod || true
                            docker run -dp 3000:80 --name sport-shop-prod ${FULL_IMAGE}
                        """
                    } else if (DEPLOY_ENV == 'Staging') {
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