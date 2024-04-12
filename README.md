# SER375 Open Source Development Project Website
<div style="text-align: center;">
    <img src="/ReadMeImages/Banner.png" alt="banner"/>
</div>

## Table of Contents
* [Setting up for development](#setting-up-for-development)
    * [Forking the repo](#fork-the-repo)
    * [Getting the files to your computer](#getting-the-files-to-your-computer)
* [How to add your project page](#how-to-add-your-project-page)
 * 

## Setting up for development
This process is a little complicated, so read these instructions carefully.
### Fork the repo
1. On the top right side of the GitHub repo page, click the fork option
2. Doing so will take you to a new page; click ```Create fork```

### Getting the files to your computer
1. Go to your newly set up repo on GitHub
2. Click the green drop-down button in the top right corner that says ```Code```
3. Copy the link
4. Open your terminal and cd into a path where you can easily find your files (ex. desktop)
5. Once in your preferred directory, use the command ```git clone (your copied link)```
6. You can now open your forked repository on your IDE
7. Run this command in the terminal ```git remote add upstream https://github.com/ellidelli/SER375ProjectsSite.git```
8. Run this command in the terminal ```npm install```
9. Run this command in the terminal ```npm run serve```

## How to add your project page
1. Choose between the 3 different templates.
   
|One Column Template|Two Column Template|Slideshow Template|
| --- | --- | --- |
| | |


### Optional steps if you want one of your images to appear on the homepage background
1. Navigate to the folder ```/src/assets/backgrounds``` folder
2. Drop your image (renamed, please) into the folder
3. Navigate to the file ```src/views/HomeView.vue``` and add your image name to the line 24 array
4. Now your image can randomly pop up as the home screen background

***Please, before continuing, make sure the website still works, and your project page looks the way you want***

### Adding your project to the official repo
1. Run ```git pull upstream master```
2. Go to the original repo’s GitHub page
3. Create a pull request like normal
4. When you get to the Compare changes step, you must hit compare across forks and select your forked repo and branch name
5. Create your pull request
6. Wait until your project is merged with the site!
