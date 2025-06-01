# Neostella QA Engineer Test

This repository contains automated tests for [theautomationchallenge.com](https://theautomationchallenge.com) using [Playwright](https://playwright.dev/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/neostella-qa-engineer-test.git
    cd neostella-qa-engineer-test
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Create a `.env` file in the project root with your credentials:**
    ```
    AUTOMATION_CHALLANGE_EMAIL=your_theautomationchallenge_username
    AUTOMATION_CHALLANGE_PASSWORD=your_theautomationchallenge_password
    ```

### Running Tests

To run all tests:
```bash
npx playwright test
```

To open the Playwright Test Runner UI:
```bash
npx playwright test --ui
```

## Project Structure

- `tests/` - Contains all Playwright test files.
- `playwright.config.ts` - Playwright configuration.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)

---

**Note:** Never commit your `.env` file or credentials to version control.
