function renderLicenseBadge(license) {
    if (license==='MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } 
    else if (license==='Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } 
  else if (license==="MPL 2.0") {
  return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return '';
  }
}
   
function generateMarkdown(data) {
    let badge = renderLicenseBadge(data.license)
    return `# ${data.project_name}
## Description 
 ${data.description}
## Badge
* ${badge}
## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contribution](#contribution)
  * [License](#license)
  * [Questions](#questions)
     
 ## Installation
 The following dependencies must be installed to run the application ${data.install}.
 ## Usage
  ${data.usage}
 ## License
  This project is licensed under the ${data.license} license.
 ## Test
  ${data.test}
 ## Contribution
  Contributors:${data.contribution}
 ## Questions
  If you have any questions about the repo, open an issue or contact ${data.name} directly at: ${data.email}
    

    `;
  }
  
  module.exports = generateMarkdown;