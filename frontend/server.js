const express = require("express");
const app = express();

app.get("/", (req,res) => {
	res.send(`
	 <h1>Frontend</h1>
	 <button onclick="fetchData()">Call API </button>
	 <pre id="output"></pre>


	 <script>
	   function fetchData() {
	     fetch("/api")
	        .then(res => res.json())
                .then(data => {
		  document.getElementById("output").innerText = 
		     JSON.stringify(data, null, 2);
		 });
           }
	  </script>
	 `);
});

app.listen(3000, () => {
	console.log("Frontend running on port 3000");
});
