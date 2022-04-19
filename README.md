# Page Load Time 

The first screenshot shows the page load time for the site hosted on netlify, It is 0.5s.
![Netlify Page Load Time](/Img/Screenshot%202022-04-19%20at%2017.17.57.png)
The second screenshot shows the page load time for the local build is 0.31 ms.
![Local Build Page Load Time](/Img/Screenshot%202022-04-19%20at%2017.18.40.png)

## To optimize the page load time, I have used vite which is much more optimized compared to create-react-app, and used the useMemo hook to memorize the data, for rendering the table.
