pipeline {
  agent any

  options {
    timestamps()
    ansiColor('xterm')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Run tests') {
      steps {
        // Сервер запустит Playwright согласно webServer в конфиге
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {
      // JUnit-отчёты
      junit 'test-results/results.xml'
      // Архивация репортов (HTML)
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}