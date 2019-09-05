import java.text.SimpleDateFormat

pipeline {
  options {
    buildDiscarder logRotator(numToKeepStr: '25')
    disableConcurrentBuilds()
    office365ConnectorWebhooks(
      [
        [name: 'CEP Jenkins', notifyAborted: true, notifyFailure: true, notifySuccess: true, startNotification: true, url: 'https://outlook.office.com/webhook/6bd8ddb7-5c21-46b2-9607-abb31616a113@9d2a793f-db8c-4949-820c-34e31d66b3cd/JenkinsCI/9806314772e748bea62da02351aef4c4/a2049f0f-f62c-4c7a-a04d-cda3616f0217']
      ]
    )
  }
  agent {
    kubernetes {
      cloud "kaniko"
      label "eslint-config-enspire"
      serviceAccount "kaniko"
      yamlFile "KubernetesPod.yaml"
    }      
  }
   stages {
    stage('publish') {
      steps {
        container(name: 'nodejs') {
          //shared library functions
          ciPrettyBuildNumber()
          npmPublish()
        }
      }
    }
  }
}