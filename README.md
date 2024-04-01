# SER375 Open Source Development Project Website
## What is this?
This website displays the various projects completed by students in Quinnipiac's SER375 course.

## Access the website
_Not available yet_

## How to add your own project
This process is a little complicated so read these instructions carefully.
###Fork the repo
1. On the top right side of the GitHub repo page, click the fork option
2. Doing so will take you to a new page, click ```Create fork```

###Getting the files to your computer
1. Go to your newly set up repo on GitHub
2. Click the green drop down button in the top right corner that says ```Code```
3. Copy the link
4. Open your terminal and cd into a path you can easily find your files (ex. desktop)
5. Once in your prefered directory, use the command ```git clone (your copied link)```
6. You can now open your forked repository on your IDE
7. Run this command in the terminal ```git remote add upstream https://github.com/ellidelli/SER375ProjectsSite.git``

###How to add your project
#####Creating your project file

1. I suggest having a document with the following information: project title, your name, a project description, the story of how your project came about, and the struggles and triumphs you faced in the process. Please also have your images and your demo video ready.
2. Navigate to this folder ```/src/projects``` in the source code
3. Place your images in the folder ```project_images```
4. Place your demo video in the folder ```project_videos```
3. Create a new file called ```<YourProjectName>.vue``` within the main projects folder
4. In the same folder, you will see a file called ```SampleProject.vue```, copy this code and paste it into your new file
5. Scroll to the ```scripts``` tag. Notice the import statements. Do not touch the the first import that says ```twoColumnTemplate```. Change the image import and the video import to your images and video. To add more than one image, copy and paste the image import with a new path and change the variable name.
6. Scoll to the ```export default``` section. Notice the name variable. Change it to your projects title. **With no spaces.**
7. Scroll to the ```data``` section. Use your prepared document to put in your project data to replace the sample data.

#####Allowing your project to render on the site
1. Navigate to the file ```/src/views/Project.vue```
2. Within the template, add your own project above the invalid project option. Use this code: ```      <div v-if="projectTitle === 'sampleproject'">
        <SampleProject/>
      </div>``` Replace sampleproject with your project title. The first one should be all lowercase and the second should have uppercase on each word.
3. Scroll to the ```scripts``` section. Import your project the same way the sample was. **Do not get rid of the sample, just add yours below.**
4. Within ```export default```, you will see components. Add your project title with the same casing as your import. Please add a "," after your addition. 

#####Adding search functionality for your project
*coming soon*

#####Optional steps if you want one of your images to appear on the homepage background
1. Navigate to the folder ```/src/assets/backgrounds``` folder
2. Drop your image (renamed please) in the folder
3. Navigate to the file ```src/views/HomeView.vue``` and add your image name to the line 24 array
4. Now your image can randomly pop up as the homescreen background

***Please before continuing, make sure the website still works and your project page looks the way you want***

#####Adding your project to the offical repo
1. Run ```git pull upstream master```
2. Go to the original repo’s GitHub page
3. Create a pull request like normal
4. When you get to the Compare changes step, you must hit compare across forks and select your forked repo and branch name
5. Create your pull request
6. Wait until your project is merged with the site!




## How to set up the site for further development
#### Clone this repo
* Open your terminal and cd into your desired file path (ex. cd /Desktop)
* Type the command:
  ```
  git clone https://github.com/ellidelli/SER375-Project-Website.git
  ```

#### Open the project in an IDE
* in the terminal, run the following command to install any project dependencies listed in the package.json file
```
npm install
```

#### Commands for starting up the local server
##### Compiles and hot-reloads for development
```
npm run serve
```
