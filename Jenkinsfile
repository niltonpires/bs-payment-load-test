node("java8") {
    def scmVars
    // def projectStage

    try {

        stage('Checkout') {
            deleteDir()
            scmVars = checkout scm // Checkout the repository and save the resulting metadata
        }

        stage('Gatling Test') {
            withCredentials([usernamePassword(credentialsId: 'svcacc_ps_jenkins',passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                sh "docker login -p ${PASSWORD} -u ${USERNAME} repo.intranet.pags"
            }

            sh('''
                docker run --rm \
                    -e HTTP_PROXY=$HTTP_PROXY \
                    -e HTTPS_PROXY=$HTTPS_PROXY \
                    -e NO_PROXY=$NO_PROXY \
                    -v $(pwd)/src:/workspace/src \
                    -i repo.intranet.pags/bank-docker/gatling-sbt:v1 \
                    /bin/bash -c "${COMMAND_GATLING} && zip -r /workspace/src/gatling.zip /workspace/target/gatling/"
            ''')
        }

        currentBuild.result = 'SUCCESS'
    } catch (Exception err) {
        currentBuild.result = 'FAILURE'
    }
}
