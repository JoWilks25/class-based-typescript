# How to run app locally
1. run `npm install`
2. run `npm run start`
App will run on http://localhost:3000/

# How to run app as a dockerised container
make sure docker is installed and running on your local device
run following commands:
1. `docker build . -t dockerized-react`
2. `docker run -p 3000:80 -d dockerized-react`
App will run on http://localhost:3000/

To stop the locally run dockerised container:
1. `docker ps`
2. Get the container Id
3. `docker stop {container Id}`


# class-based-typescript
