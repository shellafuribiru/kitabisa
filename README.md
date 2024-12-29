# Automation Tests for Kitabisa Technical Test

This repository contains automation tests for both Web and API functionalities as part of a technical test for Kitabisa. The tests are developed using [Playwright](https://playwright.dev/).

## Features

### Web Automation Scenarios
1. **Validate Login Redirection**
   - Ensure the user is redirected to the Membership Activation Page after logging in.
2. **Validate "Aktifkan Keanggotaan" Button Visibility**
   - Verify that the "Aktifkan Keanggotaan" button is visible on the Membership Activation Page.
3. **Validate Pop-up Appearance on Activation Failure**
   - Check that a pop-up appears when membership activation fails.

### API Automation Scenarios
1. **GET Single User**
   - Retrieve details of a single user.
2. **POST Register**
   - Validate successful and unsuccessful registration scenarios.
3. **POST Login**
   - Validate successful and unsuccessful login scenarios.
4. **PATCH Update User**
   - Update user information.

## Prerequisites
- Node.js (version 16 or later)
- Playwright installed globally or in the project

## Installation
Install Playwright and its dependencies:
   ```bash
    npm init playwright@latest
   ```

## Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/shellafuribiru/kitabisa.git
   ```

## Project Structure
kitabisa/
├── tests/
│   ├── API/               # Contains API test cases
│   │   ├── login-successful.spec.ts
│   │   ├── login-unsuccessful.spec.ts
│   │   ├── patch-user.spec.ts
│   │   ├── register-successful.spec.ts
│   │   ├── register-unsuccessful.spec.ts
│   │   └── single-user.spec.ts
│   ├── Web/               # Contains Web UI test cases
│   │   ├── TC-001.spec.ts
│   │   ├── TC-002.spec.ts
│   │   └── TC-003.spec.ts
├── .gitignore             # Files and folders to exclude from Git
├── package-lock.json      # Lock file for npm dependencies
├── package.json           # Project dependencies and scripts
├── playwright.config.ts   # Playwright configuration file
└── README.md              # Project documentation

## Running Tests
### Web Tests
To run all web automation tests:
```bash
npx playwright test tests/web
```

To run a specific web test 
(e.g., `TC-001.spec.ts`):
```bash
npx playwright test TC-001.spec.ts
```

### API Tests
To run all API automation tests:
```bash
npx playwright test tests/api
```

To run a specific API test (e.g., `single-user.spec.ts`):
```bash
npx playwright test single-user.spec.ts
```

## Troubleshooting
If you encounter the following error while running test scripts:
```bash
Error: EPERM: operation not permitted, rmdir 'C:\Users\Lenovo SSH-09\OneDrive\Documents\github\kitabisa\test-results'
```
You may need to manually delete the `test-results` folder in the project directory before re-running the tests.

## Reporting
Playwright provides detailed HTML reports for all test runs. After executing tests, you can generate a report using:
```bash
npx playwright show-report
```

## Contact
For questions or feedback, feel free to reach out:

Author: shellafuri Biru Mardika

Email: shellafuribirumardika@gmail.com
