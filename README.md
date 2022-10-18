# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

- Use moment.js to display today's date Day of the week, date and year 
- Ex: Thursday, September 5, 2022
- function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
- function displayTime is then called at the very end of the code:
  - setInterval(displayTime, 1000);

WHEN I scroll down, THEN I am presented with timeblocks for standard business hours
  - Possibly needs a div for each block of time?
  - jQuery may have an easier method to call: selectable? 
  https://jqueryui.com/selectable/
  -Ex: $(function () {
    $("#selectable").selectable();
});
  - May use the jQuery row function for making the two columns with the time and the body of the calendar, with buttons on the right side of it
  Ex: https://getbootstrap.com/docs/4.0/layout/grid/
  - May need to mess around with styling to get it to look right
  - Or consider the versions of jQuery and jQuery UI that are linked appropriately on what version it is
  - Of note, jQuery adds in a style sheet of its own that messes with formatting and presentation

WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  - Will need to coordinate the classes/ids from the CSS to match the appropriate HTML
  - Past is gray, current hour is red, future is green
  - Need a function that checks what time it currently is and changes the color
  - Might need an if statement
  Moment.js docs might have some clues

WHEN I click into a timeblock, THEN I can enter an event
WHEN I click the save button for that timeblock
  - <form>
  - If need to delete a calendar event, consider the following from activity 05/06
  - Ex:   // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}
  - May consider using the jQuery button options: https://api.jqueryui.com/button/#event-create


THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
  - Reference 21-24 in the Web APIs activities
  - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)






# Third-Party APIs: Work Day Scheduler

## Description

This project provided starter code which was used to create a work day scheduler using HTML, CSS, jQuery and other resources such as Moment.js.

The following acceptance criteria are addressed in this homework:

- GIVEN I am using a daily planner to create a schedule, WHEN I open the planner, THEN the current day is displayed at the top of the calendar
  - Located on the page jumbotron, you will see the current day of the week, date and time displayed in real time

- WHEN I scroll down, THEN I am presented with timeblocks for standard business hours
  - When you scroll down, you will be presented with business hours on the left-hand side, blocks for text in the middle, and a save button on the right-hand side. This was formatted utilizing bootstrap layout features. If you re-size the screen, you will see the hours and savae buttons remain at 2/12 portion of the screen, and the text content with be 8/12 of the screen

- WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future

- WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future

- 




## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

- Bootstrap layout: https://getbootstrap.com/docs/4.0/layout/grid/
- Moment.js for time formatting: https://momentjs.com/


## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.