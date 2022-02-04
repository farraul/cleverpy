## Proyecto Cleverpy
### Javascript, React, Typescript, HTML, SCSS

<br />

|Usuario | Contraseña |
| :---         |  :---         | 
 cleverpy | 12345

### Pages
***
###
#### Login
![image](https://user-images.githubusercontent.com/28491001/152609734-e90e6a95-33c0-4608-be5e-b9a98d07529e.png)
#### Posts
![image](https://user-images.githubusercontent.com/28491001/152609772-f1b68e13-8975-4da9-bb5d-b94032658eb3.png)
#### Posts: Actualizar Post
![image](https://user-images.githubusercontent.com/28491001/152609892-b53969f8-c02f-437d-a4ef-5faae9c82caf.png)
#### Posts: Eliminar Post
![image](https://user-images.githubusercontent.com/28491001/152609914-5ba7535e-e9e8-4407-95d3-bd9fb133cc1e.png)
<br />
<br />

### Comandos para añadir Typescript
***
🔷 npm i -D typescript @types/node @types/react @types/react-dom @types/jest

🔷  npm install @types/react-redux

 {<br />
### Acciones
🔷 Crear en src el archivo: react-app-env.d.ts 
Con el siguiente contenido:
 <reference types="react-scripts" />
 
 🔷 Crear archivo: tsconfig.json
 <br /> 
 Con el siguiente contenido:
 {<br />
    "compilerOptions": {
    
      "target": "es5",
      
      "lib": [
      
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": [
      "src"
    ]
    <br />   
  }
 
  🔷 Modificar todos los archivos de .jsx a .tsx  / .ts
