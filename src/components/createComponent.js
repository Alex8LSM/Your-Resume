const fs = require('fs').promises;
const componentsPath="src/components";
const createComponentDyr = (name)=>{
  fs.mkdir(`${componentsPath}/${name}`, (err) => {
    if (err) throw err;
  });
   }
const createComponentJSX = (name)=>{
 const data = `import styles from './${name}.module.css';

 const ${name} = () => {
 
   return (
     <div className={styles.container}>         
     </div>
   );
 };

 export default ${name}; `;
 const filePath = `${componentsPath}/${name}/${name}.jsx`;
 fs.writeFile(filePath, data,);
}
const createComponentCSS = (name)=>{
  const data = `.container
  {

  }`;
  const filePath = `${componentsPath}/${name}/${name}.module.css`;
  fs.writeFile(filePath, data,);
 }
const createComponent = (name) => {
  createComponentDyr(name);
  createComponentJSX(name);
  createComponentCSS(name);
  console.log(`${name} is successfully created`);
}

try {
  const components = process.argv.slice(2);
  if (components.length===0) console.log('You must enter component names as parameters')
  else {
    components.map((component)=>{
      createComponent(component);
    }) 
  }
} catch (error) {
  console.log("Something went wrong :( ",error);
}
