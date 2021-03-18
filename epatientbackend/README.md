# epatientbackend

Requirements:
PostgreSQL 13 <br />
Postman App v8.0.6 : https://www.postman.com/downloads/ <br />
NodeJS v14.5.0 <br />

1. Get familiar with NodeJS <br />
https://www.youtube.com/watch?v=HYvBXlYykO0 <br />

2. Learn JSON <br />
https://www.youtube.com/watch?v=iiADhChRriM <br />

3. Postman tool will be used to test the backend apis <br />
You dont need the frontend to test apis. <br />
First create the api in the backend, test it using Postman and then connect it with frontend <br />

4. Identify all the Methods you need in your application <br />
Review it with me first before creating the backend apis <br />

5. Divide the work for backend api <br />

6. Recordings <br />
Day1: https://drive.google.com/drive/folders/1J1oR1_T64iEVTcTsXIEexx2ZN6quxEPJ?usp=sharing <br />



```

Methods					URLs 					Actions
-------------------------------------------------------
GET						patient/all		    	get all patients/list   
GET						patient/user/:id		get patients by id      
POST					patient/create			add new patient       
PUT						patient/user/:id		update patient by id  //feb
DELETE					patient/user/:id		delete patient by id  //feb
DELETE					patient/user			remove all patients   //rachel

Doctor

GET						doctor/all		    	get all doctor/list      //fla
GET						doctor/user/:id	      	get doctor by id   //rachel
POST					doctor/create			      add new doctor        //achsha
PUT						doctor/user/:id		    update doctor by id  //rachel
DELETE					doctor/user/:id		    delete doctor by id  //fla
DELETE					doctor/user			    remove all doctors      //achsha

Admin

GET						admin/user/:id	      	get admin by id   //feb
GET						admin/all		    	get all admin/list   //achsha

//model.js for prescription ?



GET method on http://localhost:5000/api/patient/all 

ng g service patient
ng g service message

ng g class patient
ng g class message



ng g service admin
ng g service doctor

ng g class admin
ng g class doctor

things to do
--
authentication
profile name/id left corner
add pages 
   - patient list 
   - doctor list
   - admin list *
   - edit doctor/patient
   - prescription page
   - view prescriptions 
logout