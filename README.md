# Flexbox RULES

## Introduction

In this activity, you'll be designing the sign-in and sign-up forms to replicate the Authentication page mockup. After that, you'll be enhancing the styles of the stylish e-commerce page that displays products in three different views.

These tasks will turn you into a Flexbox expert! You'll gain the ability to construct about 95% of the layouts needed on various freelance platforms. This exercise promises to be a highly enjoyable way to refine your Flexbox skills!

Check out the pages images you'll be imitating:

- Authentication page: /assets/images/authentication-page-solved.png
- E-commerce page:
  - Grid view: /assets/images/e-commerce-page-grid-solved.png
  - Lines view: /assets/images/e-commerce-page-lines-solved.png
  - Lines-action view: /assets/images/e-commerce-page-lines-action-solved.png

Please, watch the [Flexbox Rules INTRO video](https://www.loom.com/share/6bf938c7e4234745970fd83181b585a9?sid=19a5fc8d-b8e0-4d7b-b705-2d638fd2ec63) before you start.

## Learning objectives

This assignment should prove that a student is able to:

- Create forms and multiple form elements
  - labels
  - input fields
  - multiple option input fields
  - single option input fields
  - dropdowns
  - submit buttons
- Utilize Flexbox to create layouts
  - align elements horizontally and vertically
  - center items
  - set single direction and two direction layouts
  - apply multiple layout styles to a single element through a service CSS class name
- Build the HTML structure to conform Flexbox relations concept.

## Standard requirements

- [x ] Fork the project to your github account
- [x ] Clone the project to your computer
- [ x] Open the project in VSCode with `code <cloned_repo_folder_name>`
- [x ] This Assignment is NOT tested. You can use all the desired creativity!
- [ x] All the tasks of the "Specific requirements" section MUST be solved
- [ x] The project's file/folder structure should NOT be edited!
- [ x] The ecommerce-page.html file should NOT be edited!
- [x ] The code of the index.html and styles.css should pass the W3C validation (Feel free to use either the "w3c web validator" VSCode extension or the "Online w3c Markup Validation Service")
- [x ] The code MUST be formatted with Prettier.
- [ x] Push the changes to the Github repo, when finished.
- [ x] Submit a .txt file with the Github repo url.

You'll discover certain styles existing in the initial state of the CSS files. They're present for a purpose, but it's your call to determine whether you want to utilize them, remove them, or create some.

## Specific requirements

> Authentication page

Acceptance criteria:

- [ x] The layout should closely resemble the mockup.
- [x ] Avoid using margin and float CSS rules to define distance/space between elements or their alignment.
- [ x] Positioning (utilizing the position CSS property) is prohibited.
- [x ] Edit the following files:
  - [x ] html: `/pages/authentication-form.html`
  - [x ] css: `/css/authentication-form.css`

Create the form HTML elements to imitate the mockup:

- [ x] Wrap each group of a label and input elements with a container representing a row.
- [ x] Maintain a 6px distance between the label and the input.
- [ x] Keep a 30px distance between each row.
- [x ] Bolden label text when paired with a text or text-like input field.
- [x ] Avoid bold formatting for labels paired with checkboxes and radios.
- [x ] Utilize a paragraph element if the label element can't be used.
- [ x] Ensure inputs span the full width available within the parent.
- [x ] Set the height of inputs with text-like values to 30px.
- [x ] Set the height of dropdown elements to 30px.

For the "Sign In form":

- [ x] The form should have a border of 1px width and solid style.
- [x ] The login input element.
  - [x ] Should require a value.
  - [x ] Should include a placeholder.
  - [x ] The value should be validated as an email by the default browser mechanism.
- [x ] The password input element.
  - [x ] Should require a value.
  - [ x] Should include a placeholder.
  - [ x] The value should be validated to contain a minimum of 8 characters and a maximum of 20 by the default browser mechanism.
  - [x ] Should hide symbols during typing.
- [x ] The "Sign in" button should submit the form to initiate field validation using the default browser mechanism.

For the "Sign Up Form"

- [ x] The name input element
  - [x ] Should require a value.
  - [ x] Should include a placeholder.
- [ x] The email input element
  - [x ] Should require a value.
  - [ x] The value should be validated as an email by the default browser mechanism.
  - [ x] Should include a placeholder.
- [x ] The password input element
  - [x ] Should require a value.
  - [x ] The value should be validated to contain a minimum of 8 characters and a maximum of 20 by the default browser mechanism.
  - [ x] Should hide symbols during typing.
- [ x] The confirm password input element
  - [x ] Should require a value.
  - [x ] The value should be validated to contain a minimum of 8 characters and a maximum of 20 by the default browser mechanism.
  - [x ] Should hide symbols during typing.
- [x ] The phone number input
  - [x ] Should require a value
  - [x ] The value should be validated to follow a template of telephone number strictly.
- [ x] The avatar input
  - [x ] Should be represented by a "Choose file" button allowing the user to select a file from their computer when clicked.
- [x ] The state dropdown list
  - [x ] Should be a dropdown list with a default option "Select your state" selected by default and three options with random state names (Iowa, etc.).
  - [ x] The default option should be unavailable to be selected.
- [ x] The city dropdown list
  - [x ] Should be a dropdown list with a default option "Select your city" selected by default and three options with random city names (Dallas, etc.).
  - [ x] The default option should be unavailable to be selected.
- [ x] The Gender single-option group
  - [x ] Clicking the label should activate the corresponding radio button.
  - [ x] The "Other" option should be active (enabled) by default.
- [ x] The "Sign in" button should submit the form to trigger field validation using the default browser mechanism.

> E-commerce page

Acceptance criteria:

- [x ] Edit the following files:
  - [x ] css: `/css/ecommerce-page.css`
- [ x] Ensure the layout closely mirrors the mockup.
- [x ] Refrain from using the margin CSS rule to specify distances between elements.
- [ x] Positioning is prohibited.
- [x ] When switching between views, display a different product list view.
- [ x] The HTML file should remain unchanged; no updates or modifications are allowed.
- [ x] The permitted list of CSS rules to add to the styles file is as follows:
  - `border-*`
  - `padding-*`
  - width
  - `*-width`
  - height
  - `*-height`
  - display
  - flex-direction
  - flex-wrap
  - justify-content
  - align-items
  - gap
  - color
