import React from 'react'
import { motion } from 'framer-motion';

const leftVariant = {
  hidden:{
    x: -800
  },
  visible:{
    x: 0,
    transition: {
      duration: 1.1
    }
  }
}

const rightVariant = {
  hidden:{
    x: 800
  },
  visible:{
    x: 0,
    transition: {
      duration: 0.9
    }
  }
}

//Resume Component
function Resume() {
  return (
    <div className='skills'>
      <div id='skillTitle'> <br />
      <h4> Skills and Proficiencies:</h4> <br/>
      </div>
      <div id='skillPoints'>
      <motion.div variants={leftVariant} initial="hidden" animate="visible">
        <div className='skillend'>
          <h4 className='endType'>Front End</h4> <br />
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript / ES6+</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul> <br />
        </div>
        </motion.div>
        <motion.div variants={rightVariant} initial="hidden" animate="visible">
          <div className='skillend'>
            <h4 className='endType'>Back End</h4><br />
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL / MySQL / Sequelize</li>
              <li>Inquirer</li>
              <li>MongoDB / Mongoose</li>
              <li>GraphQL</li>
              <li>JSON</li>
            </ul> <br /> 
          </div>
        </motion.div>
      </div>
      <div className='general'>
        <ul className='last' >
        <h4 className='resumeHead'>General</h4> <br></br>
            <li>MERN Stack</li>
            <li>MVC Framework</li>
            <li>GitHub</li>
            <li>Heroku</li>
            
        </ul> <br></br><br />
        
      </div>
      <br></br> <br></br><h4 className='resumeHead'>A copy of my Resume can be downloaded from icon below!</h4><br />
    </div>
  )
}

export default Resume