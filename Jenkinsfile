def gitHash = null
node('master') {
    def scmVars = checkout scm
    gitHash = scmVars.GIT_COMMIT.substring(0,8)
    def changelog = getChangeLog currentBuild
    mattermostSend "Building ${env.JOB_NAME} #${env.BUILD_NUMBER} \n Change Log: \n ${changelog}"
}
node('linux-centos8') {
    properties([disableConcurrentBuilds()])
    checkout scm
    try {
        def cluster = 'ztc-controller-us-central'
        def region = 'us-central1'
        def project = 'zerotier-central'

        sh("make docker DOCKER_TAG=${env.BUILD_TAG}")
        if ("${env.BRANCH_NAME}" == "master") {
            sh("docker push registry.zerotier.com/zerotier/docs.zerotier.com:${env.BUILD_TAG}")
            sh("gcloud container clusters get-credentials ${cluster} --region ${region}")
            sh("kubectl set image deployment docs-zerotier-com docs-zerotier-com=registry.zerotier.com/zerotier/docs.zerotier.com:${env.BUILD_TAG}")
            mattermostSend color: "#00ff00", message: "${env.JOB_NAME} #${env.BUILD_NUMBER} Deployed (<${env.BUILD_URL}|Show More...>)"
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        mattermostSend color: '#ff0000', message: "${env.JOB_NAME} broken (<${env.BUILD_URL}|Open>)"

        throw err
    }
}
@NonCPS
def getUserFromErr(err) {
    def user = err.getCauses()[0].getUser()
    return "${user}"
}
