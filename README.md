# Playwright Automation Framework

Automation framework built using Playwright and JavaScript following the Page Object Model (POM) design pattern with support for Cross Browser Execution, Azure Playwright Workspaces and GitHub Actions CI/CD integration.

---

# Features

- Page Object Model (POM)
- End-to-End UI Automation
- Data Driven Testing using JSON
- Excel Read/Write Utility using ExcelJS
- Reusable Page Manager
- Custom Playwright Fixtures
- Cross Browser Execution
- Parallel Execution Support
- Azure Playwright Cloud Execution
- GitHub Actions CI/CD Integration
- Pull Request Validation Pipeline
- Merge Restriction on Failed CI Jobs
- HTML Reporting
- Allure Reporting
- Retry Mechanism
- Trace Collection
- Screenshot & Video Capture
- Modular Framework Structure

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- ExcelJS
- Azure Playwright Workspaces
- GitHub Actions
- Allure Reports

---

# Project Structure

```bash
PlaywrightAutomation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── CustomFixture/
│   └── Custom Playwright fixtures and reusable test setup
│
├── Data/
│   └── Test data files and JSON datasets
│
├── Pages/
│   └── Page Object Model (POM) classes
│
├── TS/
│   └── TypeScript based page and test implementations
│
├── Utils/
│   └── Utility classes, Excel helpers and reusable methods
│
├── tests/
│   └── Test specifications and execution files
│
├── allure-report/
│   └── Generated Allure HTML reports
│
├── allure-results/
│   └── Raw Allure execution results
│
├── .gitignore
├── README.md
├── crossbrowser.config.js
├── package.json
├── package-lock.json
├── playwright.config.js
└── playwright.service.config.js
```

---

# Folder Description

| Folder/File                    | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `Pages/`                       | Contains Page Object Model classes            |
| `tests/`                       | Contains Playwright test files                |
| `Utils/`                       | Utility methods, helpers and Excel handling   |
| `Data/`                        | Externalized JSON and test datasets           |
| `CustomFixture/`               | Custom Playwright fixtures and reusable setup |
| `TS/`                          | TypeScript implementation files               |
| `allure-report/`               | Generated Allure HTML reports                 |
| `allure-results/`              | Raw execution data for Allure                 |
| `.github/workflows/`           | GitHub Actions CI/CD workflow files           |
| `playwright.config.js`         | Main Playwright configuration                 |
| `playwright.service.config.js` | Azure Playwright Workspaces configuration     |
| `crossbrowser.config.js`       | Cross browser execution configuration         |
| `package.json`                 | Project dependencies and scripts              |
| `README.md`                    | Project documentation                         |

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to project directory:

```bash
cd PlaywrightAutomation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Framework Design

This framework follows the Page Object Model (POM) architecture where:

- Page classes contain locators and reusable methods
- Tests remain clean and readable
- Utilities handle reusable functionalities
- Test data is externalized
- Configuration is centralized

Benefits:

- Maintainability
- Scalability
- Reusability
- Readability

---

# Run Tests

## Execute All Tests

```bash
npx playwright test
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run Specific Test File

```bash
npx playwright test tests/example.spec.js
```

## Run Tests in Parallel

```bash
npx playwright test --workers=4
```

---

# Cross Browser Execution

Framework supports Cross Browser Testing using Playwright Projects configuration.

## Supported Browsers

- Chromium
- Safari

## Browser Configuration

Configured inside `crossbrowser.config.js`

```js
projects: [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },

  {
    name: "Safari",
    use: { ...devices["Desktop Safari"] },
  },
];
```

## Run Tests on All Browsers

```bash
npx playwright test -c crossbrowser.config.js
```

## Run Tests Only on Chromium

```bash
npx playwright test -c crossbrowser.config.js --project=chromium
```

## Run Tests Only on Safari

```bash
npx playwright test -c crossbrowser.config.js --project=Safari
```

---

# Retry Mechanism

Retries are enabled automatically for CI execution.

```js
retries: process.env.CI ? 2 : 0;
```

---

# Trace Collection

Trace collection is enabled for failed retries.

```js
trace: "on-first-retry";
```

This helps in debugging failed test executions.

---

# Reporting

## Open HTML Report

```bash
npx playwright show-report
```

---

# Allure Reporting

Framework supports advanced reporting using Allure Reports.

## Generate Allure Report

```bash
npm run allure:generate
```

This command generates the Allure HTML report from execution results.

---

## Open Allure Report

```bash
npm run allure:open
```

This command opens the generated Allure report in browser.

---

## Execute Tests + Generate + Open Allure Report

```bash
npm run allure:test
```

This command performs:

1. Playwright Test Execution
2. Allure Report Generation
3. Automatically Opens Allure Report

---

## Manual Allure Commands

### Generate Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
```

### Open Allure Report

```bash
npx allure open allure-report
```

---

## Allure Report Features

- Test Execution Summary
- Passed / Failed Statistics
- Screenshots Attachment
- Trace & Video Attachments
- Execution Timeline
- Detailed Failure Logs
- Retry Analysis

---

# Package Scripts

```json
"scripts": {
  "test": "playwright test",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report",
  "allure:test": "playwright test && npx allure generate allure-results --clean -o allure-report && npx allure open allure-report"
}
```

---

# Excel Utility Support

Framework supports Excel operations using ExcelJS.

Features:

- Read test data from Excel
- Write execution results
- Dynamic test data handling

Package Used:

```json
"exceljs": "^4.4.0"
```

---

# Azure Playwright Workspaces Integration

Framework supports remote cloud execution using Azure Playwright Workspaces.

## Azure Features

- Cloud Based Browser Execution
- Parallel Remote Execution
- Centralized Reporting
- Video & Trace Uploads
- Scalable Infrastructure

---

# Azure Local Execution Setup

## Install Azure Playwright Package

```bash
npm init @azure/playwright@latest
```

## Login to Azure

```bash
az login
```

## Set Playwright Service URL

PowerShell:

```powershell
$env:PLAYWRIGHT_SERVICE_URL="wss://<region>.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers"
```

## Execute Tests on Azure

```bash
npx playwright test -c playwright.service.config.js --workers=4
```

---

# Azure Storage Permission Setup

## Get Storage Account Resource ID

```bash
az storage account show \
  --name "<storage-account-name>" \
  --resource-group "<resource-group>" \
  --query id -o tsv
```

---

## Assign Storage Blob Data Contributor Role to User

```bash
az role assignment create \
  --assignee "<object-id>" \
  --role "Storage Blob Data Contributor" \
  --scope "$(az storage account show --name <storage-account-name> --resource-group <resource-group> --query id -o tsv)"
```

This command provides permission to upload:

- traces
- screenshots
- videos
- reports

to Azure Storage Account.

---

## Create Azure Service Principal for GitHub Actions

```bash
az ad sp create-for-rbac \
  --name "<service-principal-name>" \
  --role "Contributor" \
  --scopes "/subscriptions/<subscription-id>/resourceGroups/<resource-group>" \
  --json-auth
```

This command generates Azure credentials JSON used inside GitHub Actions Secrets.

GitHub Secret Name:

```text
AZURE_CREDENTIALS
```

---

## Assign Storage Permission to GitHub Actions Service Principal

```bash
az role assignment create \
  --assignee "<service-principal-object-id>" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>"
```

This command allows GitHub Actions pipeline to upload:

- Playwright Reports
- Screenshots
- Videos
- Traces
- Azure Reporting Artifacts

to Azure Storage successfully.

---

# GitHub Actions CI/CD Integration

Framework supports automated cloud execution using GitHub Actions.

Workflow Location:

```bash
.github/workflows/playwright.yml
```

---

# GitHub Actions Features

- Automatic Trigger on Push
- Pull Request Validation
- Azure Authentication
- Remote Azure Playwright Execution
- Artifact Upload
- HTML Report Upload
- Pull Request Quality Gate Validation
- Merge Restriction on Failed CI Pipeline

---

# Branch Protection Strategy

Branch protection rules are configured to ensure code quality.

## Configured Rules

- Pull Request Validation Required
- CI Pipeline Must Pass Before Merge
- Merge Button Disabled on Failed Jobs
- Prevent Direct Push to Main Branch
- Mandatory Status Checks Before Merge

This helps maintain:

- Stable main branch
- Better code quality
- Controlled deployments
- Safer collaboration workflow

---

# GitHub Secrets Configuration

## Create Repository Secret

Name:

```text
AZURE_CREDENTIALS
```

Value:

- Azure Service Principal JSON

## Create Repository Variable

Name:

```text
PLAYWRIGHT_SERVICE_URL
```

Value:

```text
wss://<region>.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers
```

---

# GitHub Actions Execution Flow

```text
GitHub Push
      ↓
GitHub Actions Trigger
      ↓
Azure Login
      ↓
Playwright Remote Execution
      ↓
Azure Reporting & Artifact Upload
      ↓
HTML Report Upload
```

---

# Current Implementations

- Login Automation
- Cart & Checkout Flow
- Order Validation
- File Upload & Download Testing
- Excel Data Handling
- Cross Browser Testing
- Azure Cloud Execution
- GitHub Actions CI/CD
- Pull Request Validation Pipeline

---

# Future Enhancements

- AI Agent Integration for Intelligent Test Execution
- AI Powered Self-Healing Framework Capabilities
- Framework Migration from JavaScript to TypeScript
- Advanced Reporting Dashboard
- API Testing Integration
- Docker Integration
- Jenkins Integration
- Database Validation
- Visual Regression Testing
- Slack Notifications

---

# Author

## Onkar Pethe

Automation Test Engineer passionate about building scalable automation frameworks and cloud-based test execution pipelines using modern automation tools.
