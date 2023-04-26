// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {    
  if (license === 'MIT License') {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
} else if (license === 'Apache License 2.0') {
  return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
} else if (license === 'GPL 3.0') {
  return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
} else if (license === "BSD 3-Clause (New or Revised) License") {
  return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
} else if (license === 'None') {
  return '';
} else {
  return '';


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3-Clause (New or Revised) License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`
  }
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
<a name="description"></a>

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
<a name="installation"></a>
${data.installationInstructions}

## Usage
<a name="usage"></a>
${data.usageInformation}

${renderLicenseSection(data.license)}

## Contributing
<a name="contributing"></a>
${data.contributionGuidelines}

## Tests
<a name="tests"></a>
${data.testInstructions}


## Questions:
<a name="questions"></a>
For questions or concerns about this project, please contact ${data.email}. To see more of my work, visit my [GitHub profile](https://github.com/${data.github}).
`;
}


module.exports = generateMarkdown;
