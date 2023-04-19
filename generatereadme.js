class markDown {
    static renderLicenseBadge(License) {
      const badges = {
        MIT:  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        SIL: `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
        GNUGPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        IBM: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
        Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
      }
       return badges[License]
    }
    static renderLicenseLink(License) {
       const Licenselink = {
        MIT: `[MIT](https://chooselicense.com/licenses/mit)`,
        SIL: `[SIL](https://chooselicense.com/licenses/sil)`,
        GNUGPLv3: '[GNUGPLv3](https://chooselicense.com/licenses/GNUGPLv3)',
        IBM: '[IBM](https://chooselicense.com/licenses/ibm)',
        Mozilla: '[Mozilla](https://chooselicense.com/licenses/Mozilla)',
      }
        return Licenselink[License]
    }
    static renderLicenseSection(License) {
      const licenseSection=() => {
        if (License)
        {
          return `licensed under ${this.renderLicenseLink(License)}`
        }else{
          return ``
        }
      }
          return licenseSection(License)
     }
    static generateMarkdown(data) {
      return `
    # ${data.title}
    
    ${this.renderLicenseBadge(data.License)} 
   
    ## Table of Contents
  
    - [Description](#Description)
    - [Contributing](#Contributing)
    - [Usage](#Usage)
    - [License](#License)
    - [Installation](#Installation)
    - [Test](#Test)
    - [Question](#Question)
  
    ## Description
    ${data.description}
  
    ## Contributing
    ${data.Contributing}
  
    ## Usage
    ${data.Usage}
  
    ## License
    ${data.License}
  
    Licensed Under:- ${this.renderLicenseLink(data.License)}
  
    ## Installation
    ${data.Installation}
  
    ## Test
    ${data.Test}
  
  
    ${this.renderLicenseLink(data.License)}
  
    ${this.renderLicenseSection(data.License)}
  
    ## Question
    ${data.Questions}
    
    My GitHub profile is https://github.com/${data.GitHub}
    
  
    For further questions please reach me at ${data.email}
  `;
    }
  }
    module.exports = markDown;
    