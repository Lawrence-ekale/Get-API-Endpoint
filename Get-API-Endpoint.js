const express = require("express");
const app = express();

const details={
	"slackUsername":"lawrenceekale2",
	"backend":true,
	"age":24,
	"bio":" I am a forth year student from Moi University currently pursuing my Bachelor's degree in Computer Science. I am cloud passsionate and always eager to learn"
};
app.route("/").get((req,res)=>{
	res.status(200).json(details);
});
app.listen(3030);
