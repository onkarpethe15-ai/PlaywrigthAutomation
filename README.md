# Playwright Automation Framework

Automation framework built using Playwright and JavaScript following the Page Object Model (POM) design pattern with support for Cross Browser Execution, Azure Playwright Workspaces, AI Agent Integration, MCP Server Integration and GitHub Actions CI/CD pipeline.

---

# Features

- Page Object Model (POM)
- End-to-End UI Automation
- API Automation Testing
- AI Assisted Test Generation
- AI Generated Test Planning
- AI Powered POM Generation
- MCP Server Integration
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
- MCP Server
- Allure Reports
- AI Automation Agents

---

# Project Structure

```bash
PlaywrightAutomation/
│
├── .github/
│   ├── agents/
│   │   ├── playwright-framework-generator.agent.md
│   │   ├── playwright-test-generator.agent.md
│   │   ├── playwright-test-healer.agent.md
│   │   └── playwright-test-planner.agent.md
│   │
│   └── workflows/
│       └── playwright.yml
│
├── .playwright-mcp/
│   └── MCP Server configuration and AI tooling
│
├── .vscode/
│   └── VSCode workspace settings
│
├── allure-report/
│   └── Generated Allure HTML reports
│
├── allure-results/
│   └── Raw Allure execution results
│
├── fixtures/
│   └── Custom Playwright fixtures and reusable setup
│
├── node_modules/
│
├── pages/
│   └── Page Object Model (POM) classes
│
├── playwright-report/
│   └── Generated Playwright HTML reports
│
├── test-data/
│   └── Externalized JSON and test datasets
│       └── EcomData.json
│
├── test-plan/
│   └── AI generated test planning documents
│       └── selenium-practise-test-plan.md
│
├── test-results/
│   └── Screenshots, traces and videos
│
├── tests/
│   ├── api/
│   ├── ui/
│   └── seed.spec.ts
│
├── utils/
│   └── Reusable utilities and ExcelJS helpers
│
├── .gitignore
├── crossbrowser.config.js
├── package.json
├── package-lock.json
├── playwright.config.js
├── playwright.service.config.js
└── README.md
```

---

# Folder Significance

| Folder/File         | Purpose                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `.github/agents`    | AI Agents used for framework generation, test generation, self-healing and intelligent planning |
| `.github/workflows` | GitHub Actions CI/CD workflow pipelines                                                         |
| `.playwright-mcp`   | Playwright MCP Server integration and AI tooling                                                |
| `fixtures`          | Custom reusable Playwright fixtures                                                             |
| `pages`             | Page Object Model (POM) classes                                                                 |
| `tests/ui`          | UI automation test cases                                                                        |
| `tests/api`         | API automation test cases                                                                       |
| `utils`             | Utility helpers and Excel operations                                                            |
| `test-data`         | JSON driven test datasets                                                                       |
| `test-results`      | Screenshots, traces and videos                                                                  |
| `playwright-report` | Generated Playwright HTML report                                                                |
| `allure-report`     | Allure reporting dashboard                                                                      |
| `test-plan`         | AI generated test planning documentation                                                        |

---

# Framework Design

This framework follows the Page Object Model (POM) architecture where:

- Page classes contain locators and reusable methods
- Tests remain clean and readable
- Utilities handle reusable functionalities
- Test data is externalized
- Configuration is centralized
- AI agents assist with intelligent automation workflows

## Benefits

- Maintainability
- Scalability
- Reusability
- Readability
- Faster Test Development
- AI Assisted Automation

---

# AI Agent Integration

Framework supports AI assisted automation development using custom AI agents.

## Implemented AI Agents

| Agent                                     | Responsibility                                       |
| ----------------------------------------- | ---------------------------------------------------- |
| `playwright-framework-generator.agent.md` | Generates scalable framework structure               |
| `playwright-test-generator.agent.md`      | Generates Playwright automation scripts              |
| `playwright-test-healer.agent.md`         | Assists with locator healing and flaky test recovery |
| `playwright-test-planner.agent.md`        | Generates intelligent test plans from requirements   |

---

# Install AI & MCP Dependencies

## Install Playwright Framework

```bash
npm init playwright@latest
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

## Install Playwright MCP Server

```bash
npm install -D @playwright/mcp
```

---

## Start MCP Server

```bash
npx @playwright/mcp@latest
```

---

## Install Azure Playwright Integration

```bash
npm init @azure/playwright@latest
```

---

## Install Allure Reporting

```bash
npm install -D allure-playwright
```

---

## Install Allure Commandline

```bash
npm install -D allure-commandline
```

---

## Install ExcelJS

```bash
npm install exceljs
```

---

## Install Dotenv

```bash
npm install dotenv
```

---

## Install Cross Env

```bash
npm install cross-env
```

---

## Install TypeScript Support

```bash
npm install -D typescript ts-node @types/node
```

---

## Install ESLint

```bash
npm install -D eslint
```

---

## Install Prettier

```bash
npm install -D prettier
```

---

# GitHub Copilot Setup

## Install GitHub Copilot VSCode Extensions

```bash
code --install-extension GitHub.copilot
```

```bash
code --install-extension GitHub.copilot-chat
```

---

## Login To GitHub Copilot

Inside VSCode:

```text
Ctrl + Shift + P
```

Search:

```text
GitHub Copilot: Sign In
```

Complete GitHub authentication flow.

---

## Open GitHub Copilot Chat

```text
Ctrl + Alt + I
```

---

# Playwright MCP Server Integration

Framework supports Playwright MCP Server integration for AI powered automation workflows.

## MCP Features

- DOM Understanding
- AI Assisted Locator Generation
- Test Healing
- Browser Interaction Support
- AI Assisted Debugging
- AI Test Generation
- Context Aware Automation

---

# Connect MCP Server With GitHub Copilot

## Step 1

Start MCP Server:

```bash
npx @playwright/mcp@latest
```

---

## Step 2

Open VSCode with GitHub Copilot Chat enabled.

---

## Step 3

Allow GitHub Copilot / AI tools to access MCP context.

---

## Step 4

Use prompts like:

```text
Generate Playwright test using MCP browser context.
```

OR

```text
Generate locator using current browser DOM.
```

---

# Example AI Workflow

```text
Requirement
     ↓
AI Test Planner Agent
     ↓
Generated Test Plan
     ↓
AI Test Generator Agent
     ↓
Generated Playwright Tests
     ↓
AI Framework Generator
     ↓
Generated POM Structure
     ↓
Playwright Execution
```

---

# Example AI Prompts

## Generate Test Plan

```text
Generate detailed Playwright test plan for GreenKart application including cart, checkout, search and negative scenarios.
```

---

## Generate Playwright Test

```text
Generate Playwright test using POM for GreenKart add to cart workflow.
```

---

## Generate POM

```text
Generate reusable Playwright Page Object Model class for GreenKart cart page.
```

---

## Heal Flaky Test

```text
Fix flaky locator issue in GreenKart checkout test.
```

---

# AI Generated GreenKart Workflow

## AI Generated Test Plan

AI agent generates:

- Cart scenarios
- Checkout validation
- Search validation
- Quantity update scenarios
- Negative test coverage

Stored inside:

```bash
test-plan/
```

---

## AI Generated POM Classes

AI assisted Page Object generation:

- Locators
- Reusable actions
- Assertions
- Page methods

Stored inside:

```bash
pages/
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Move To Project Directory

```bash
cd PlaywrightAutomation
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Tests

## Execute All Tests

```bash
npx playwright test
```

---

## Run Tests In Headed Mode

```bash
npx playwright test --headed
```

---

## Run Specific Test File

```bash
npx playwright test tests/ui/greenkart/shopping-cart-functionaliy.spec.ts
```

---

## Run Tests In Parallel

```bash
npx playwright test --workers=4
```

---

# Cross Browser Execution

Framework supports Cross Browser Testing using Playwright Projects configuration.

## Supported Browsers

- Chromium
- Safari

---

## Browser Configuration

Configured inside:

```bash
crossbrowser.config.js
```

---

## Run Tests On All Browsers

```bash
npx playwright test -c crossbrowser.config.js
```

---

## Run Tests Only On Chromium

```bash
npx playwright test -c crossbrowser.config.js --project=chromium
```

---

## Run Tests Only On Safari

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

---

## Generate Allure Report

```bash
npm run allure:generate
```

---

## Open Allure Report

```bash
npm run allure:open
```

---

## Execute Tests + Generate + Open Allure Report

```bash
npm run allure:test
```

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

# Allure Report Features

- Test Execution Summary
- Passed / Failed Statistics
- Screenshots Attachment
- Trace & Video Attachments
- Execution Timeline
- Detailed Failure Logs
- Retry Analysis

---

# Excel Utility Support

Framework supports Excel operations using ExcelJS.

## Features

- Read test data from Excel
- Write execution results
- Dynamic test data handling

---

## Package Used

```json
"exceljs": "^4.4.0"
```

---

# Azure Playwright Workspaces Integration

Framework supports remote cloud execution using Azure Playwright Workspaces.

---

# Azure Features

- Cloud Based Browser Execution
- Parallel Remote Execution
- Centralized Reporting
- Video & Trace Uploads
- Scalable Infrastructure
- Cloud Browser Sessions

---

# Azure Local Execution Setup

## Login To Azure

```bash
az login
```

---

## Set Playwright Service URL

### PowerShell

```powershell
$env:PLAYWRIGHT_SERVICE_URL="wss://<region>.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers"
```

---

## Execute Tests On Azure

```bash
npx playwright test --config=playwright.service.config.js --workers=4
```

---

# Azure Storage Permission Setup

## Assign Storage Blob Data Contributor Role

```bash
az role assignment create \
  --assignee "<service-principal-object-id>" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>"
```

---

# GitHub Actions CI/CD Integration

Framework supports automated cloud execution using GitHub Actions.

Workflow location:

```bash
.github/workflows/playwright.yml
```

---

# GitHub Actions Features

- Automatic Trigger on Push
- Pull Request Validation
- Azure Authentication
- Azure Playwright Workspace Execution
- Artifact Upload
- HTML Report Upload
- Pull Request Quality Gate Validation
- Merge Restriction on Failed CI Pipeline

---

# GitHub Secrets Configuration

## Repository Secret

```text
AZURE_CREDENTIALS
```

Contains Azure Service Principal JSON.

---

## Repository Variable

```text
PLAYWRIGHT_SERVICE_URL
```

Contains:

```text
wss://<region>.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers
```

---

# GitHub Actions Execution Flow

```text
Developer Push
      ↓
GitHub Actions Trigger
      ↓
Azure Login
      ↓
Azure Playwright Workspace Execution
      ↓
Artifact Upload
      ↓
Azure Reporting
      ↓
Allure & HTML Reports
```

---

# AI Powered Automation Workflow

```text
Requirement
      ↓
AI Test Planning
      ↓
AI Generated POM
      ↓
AI Generated Tests
      ↓
Playwright Execution
      ↓
Azure Cloud Execution
      ↓
Allure + HTML Reporting
      ↓
AI Based Test Healing
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
- AI Generated Test Planning
- AI Assisted POM Generation

# Author

## Onkar Pethe

Automation Test Engineer passionate about building scalable automation frameworks and cloud-based test execution pipelines using modern automation tools.
