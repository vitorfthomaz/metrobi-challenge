# Metrobi Challenge

This repository is meant to solve the questions provided by Metrobi. It uses a scaffolding of a project with React + TypeScript + Vite just for the questions 3 and 6, since they require some sort of front-end visualization.

All questions are written in the `src/questions` folder with is respective codes.

Regarding the question 6, there was a lot of UI elements that were not relevant for the purpose of the question, so I purposefully ignored them, such as color patterns, ideal element positioning, proper spacings and so on.

# Running the project

On the console, run `npm install` and `npm run dev` in this order. The console will show on which URL the project is hosted on. After opening the project on the browser, check its console to see the results of the questions that don't render on the DOM.

# Changing values of the questions

To change the values of the questions that don't render on the DOM, just go to the desired question file and change the arguments of the method that is being called at the end of the file.

You can disable a specific question by removing its corresponding import statement from the file `src/App.tsx`