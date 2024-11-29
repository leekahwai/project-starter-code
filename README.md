# Udacity Cloud Developer NanoDegree Project #2
## Image Processing Microservice on AWS

1. Intention
The project intends to equip student the knowledge of creating a microservice endpoint illustrating through NodeJS.
And also a microservice platform such as elastic beanstalk to simply deployment.

2. Procedure:

i. I started by editing the server.js to create the filterimage endpoint. 
Also to ensure that the error code according to Rubric requirements are met.  HTTP 200 and 422 responses. 
![Alt text](imgs/0b.png)

ii. I also modified util.js to include axios as for some reasons, the buffer from the original code cannot be read with just the url.
I also need to make sure that the nodejs packages needs to be installed using npm install command. 
![Alt text](imgs/0c.png)

iii. To test the application locally before uploading to elastic beanstalk, I need to invoke the "npm run start" command. 
This shall invoke the nodejs microservice locally at port 8082
![Alt text](imgs/0d.png)

iv. Verify that the microservice is working in the local machine using the brower.
![Alt text](imgs/0e.png)

v. Setup IAM
![Alt text](imgs/1.png)

vi. Setup AWS CLI and EB CLI based on IAM keys
![Alt text](imgs/2.png)
![Alt text](imgs/3.png)

vii. Initialise and Create an elastic beanstalk
![Alt text](imgs/6.png)

viii. Verify from dashboard that the elastic beanstalk is setup properly
![Alt text](imgs/9.png)

ix. Verify that microservice now works on AWS
![Alt text](imgs/7.png)

x. Test using curl that the http endpoint meets the response code correctly
![Alt text](imgs/8.png)
4
