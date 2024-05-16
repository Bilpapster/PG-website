# It's me, PG!

... says Maria, embarking for opportunities to study abroad, while keeping up with the sport she loves. Her vision is to try her best in both academics and athletics and she is definitely in the right direction!

Maria is an academically exceptional long distance runner and [its-me-pg.github.io](https://its-me-pg.github.io) is her portfolio website. The source code of the latter is hosted in this GitHub repository!

# Docker instructions 
The following steps require that you have Docker installed in your computer. Navigate to the root folder of the repository and build an image named `pgsite`.

```docker build . -t pgsite```

Create and run a container from this image, running on port 3000 of the hosting machine.

`docker run -d --rm -p 3000:3000 --name pgsite pgsite`

The site is running on [localhost:3000/](http://localhost:3000/).
