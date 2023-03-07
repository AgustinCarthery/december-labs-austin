# December Labs - Wdio QA Automation suite - Austin office

This repository contains the solution for the third part of the December Labs technical challenge:
The task to be performed was to create an automation suite for the webpage of the December Labs Austin office, the tests were performed in the staging environment (https://inhouse.decemberlabs.com/).

The e2e automation flow includes the following tests:

- December Labs Homepage Login Verification.
- Verification of correct Navigation to the Austin office page.
- Verify that the "Schedule free consultation" modal is opened correctly.
- Verify that the "Schedule free consultation" form is closed properly.

Framework : [WebdriverIO](https://webdriver.io/)

---

## Test execution steps

1. Clone the repository on your local machine

```bash
  git clone https://github.com/AgustinCarthery/december-labs-austin.git
```

2. Go to the project directory

```bash
  cd december-labs-austin
```

3. Install dependencies using npm

```bash
  npm install
```

4. Run tests locally

```bash
  npm run test
```

---

## Recommended improvements

- The top menu of the page only shows the home option in the display of the hamburger menu, this generates confusion because when Home is not shown in the Desktop version the user may not be sure in which section of the page he/she is in.
- Add more padding to the "Schedule free consultation" modal as the title is too close to the margins. On the other hand after adding more padding I would take the opportunity to separate the modal close button from the text as they are very close to each other.
- I would add regex to the fields: "Your name", "Company" and "Message" as these fields do not have validation of types and number of characters to enter, this can lead to a potential customer who wants to contact the company does not send correct contact information.
- Remove the scroll bar inside the "Schedule free consultation" modal as the margin of movement is minimal and presents a visual discomfort to the user. I would suggest adapting the size of the modal content to avoid scrolling.

---

## Author

- [@AgustinCarthery](https://github.com/AgustinCarthery)
