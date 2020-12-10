//How to get Help:


//Twitter: 
//Email: ste.girder@gmail.com

//Questions usually answered around 9am PST Mon-Fri

//exercise at following url: https://codesandbox.io/s/react-yud4c?file=/src/App.js via codesandbox

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Intro to React//

//The App function is a React Component

//App Component   ==>> returns ==>> JSX
//Produces JSW						Set of instructions to tell react what
//and handles						content we want to show on the screen
//user events						

//JSX Elements 

//Tell React to Create a normal HTML element
	//div, span, ht, table, hr, input

//or

//Tell react how to show another component
	//Field, Translate, Languages

<div>
	<Field />
	<Languages />
	<hr />
	<Translate />
</div> 

//React looks at div -- is this a DOM element? Yes - renders on screen
//React looks at Languages which is in the components folder below

//JSX from the Field Component
<div>
	<label>{label}</label>
	<input/>
</div>

//React looks at DIV -- is this a DOM element? Yes - renders on screen
//React looks at Label -- is this a DOM element? Yes - renders on screen
//React looks at Input -- is this a DOM element? Yes - renders on screen
//React then  takes this group of elements and renders them together where the code
//dictates on the App()=>{} 


//Where are there two Libraries?  React and ReactDom?

	//Whenever you're working w/ react you're actually using two libraries.
		//React library is a "reconciler" knows how to solve situations
		//React DOM  is a "renderer" knows how to convert JSX-HTML and render in DOM

//What was the useState stuff?

	//Makes use of state system - is all about managing data inside of your application
	//Both text and language are going to change over time (in sandbox app) so we are 
	//using state to update some content on the screen.



//First React Project
	//Install/Update Node JS
	//Install create-react-app
	//run script 'npx create-react-app <nameofapp>'


////////////////////////////////////////////////////////////////////////////////////////////////////////
//Why did we have to install 1700 packages to run create-react-app?

//If you've been learned JS, you've probably learned ES5 and some ES2015, there is ES2016-ES2019
	//Updates to the languages are generally for developers with new features to assist
	//As much as possible we want to use the newer advantages of JS - however...
		//...The JS we write has eventually to be executed on user's browser, certain 
		//browsers are not always held up to date
	//ES5 and ES2015 can generally be executed an dhandled by every modern browser...
		//2016 and on most browsers do not support the new code
		//TO SOLVE THIS WE USE BABEL

//BABEL is a command line tool that can take any version of JS and spit out an ES5 version of the JS
	//therefore it can be executed by every browser
		//includes a lot of packages hence all the packages installed.

//Looking at our First React Project
	//public folder 
		//contains STATIC files, which will not be altered.
	//node modules 
		//conatins all dependencies that were installed into our project.
	//package.json
		//lists all dependencies taht our project requires and had a little project configuration inside it 
		//we will do updates to the package.json file
	//package-lock.json
		//lists the exact version of all the dependencies that we installed into our project
	//read-me 
		//file tells how to run create-react-app
	//.gitignore 
		//lists all files taht will .git should ignore if it will be tracking our project.

////////////////////////////////////////////////////////////////////////////////////////////////////////
//First create-react-app project

	//common errors 
		//port in use error - localhost 3000 is already in use, may need to stop a process/use another port
		//localhost 3000 doesn't work - go to network address on terminal message.

	//Import React from 'React'

		//import -> we want to get code from some other file/dependency
		//React --> the variable we want to assign this import to (it's convention to name the var the same thing as the libarry)
		//from --> We are about to specify the name of the library/file we are importing from
		//'react' --> Name of dependency or path to file we are importing


//from Index.html file and end of index.js/app.js
ReactDOM.render(
	<App />, 
	//reference to <App> tells react that we want to call our App function and get back 
		//all the JSW we had written inside <App> and eventually turn it to html
	document.getElementById("root")
	//second argument is a reference to where we want to show our index.html file 
		//(id of div in ./public/index.html is 'root')
);

//Babel is also used to process JSX
	//the jsx that we are writing is never contained in any user's browser
	//before any jsx gets sent out it is first converted to convention es5 normal js
		//How does this happen?  WE can use a tool that babel made to demonstrate this 
			//@ babeljs.io > try it out!

//////////////////////////////////////////////////////////////////////////////////////////
//JSX
	//Special dialect of JS (it's not HTML!)
	//Browsers don't understand JSX code! We write JSW then run tools to turn it around to normal JS
	//Very similar in form and function to HTML with a couple differences

//Exercise to demonstrate how HTML and JSX are different
	//codepen.io 
const App = () => {
	return 
	<div>
		<label class="label" for="name">Enter name:</label>
		<input id="name" type="text" />
		<button style="background-color: blue; color: white;">Submit</button>
	</div>
};
	//DO NOT DO THIS!! WHEN YOU PLACE THE FIRST ELEMENT DIRECTLY UNDERNEATH RETURN IT WILL THROW AN ERROR
	//OPENING TAG MUST BE ON THE SAME LINE OF OPENING STATEMENT!
const App = () => {	
	return (
		<div>
			<label className="label" for="name">Enter name:</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
		</div>
	);
};
	//THIS STYLE IS THE PREFERRED CONVENTION WHEN WORKING WITH ANY MULTILINE JSX BLOCK.

//////////////////////////////////////////////////////////////////////////////////////////
//JSX vs HTML
	//Adding custom styling to an element uses different syntax
	//Adding a class to an element uses different syntax
	//JSX can reference JS variables

	//HTML
	<div style="background-color: 1px solid red"></div>

	//JSX
	<div style={{backgroundColor: 'red'}}></div>
		//the 1ST bracket references a JS variable
		//the 2ND bracket references a JS object

	//from HTML to JSX
		//remove double quotes, replace them double curly braces 
		//if you have a compound property name, remove the dash and camelCase its spelling

	//CONVENTION
		//When referencing JSX properties it is convention to use double quotes ""
		//When referencing anything else in a string it is convention to use single quotes ''
			//Either one will work but let's try to follow the convention!!

const App = () => {	

	function getButtonText() = { return 'Click on me' };

	const buttonText = 'Click on me';

	return (
		<div>
			<label className="label" for="name">Enter name:</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{getButtonText()}
			</button>
		</div>
	);
};

	//Referencing JS in JSX
		{getButtonText()}
		//in order to reference a JS element in JSX we use curly braces around it like above
			//we need to include a () in order to call a JS function that we prepared
		{buttonText}
		//this is how we'd reference a non-function JS element in JSX

	//VERY COMMON ERROR
		//JS var
		const buttonText = { text: 'Click me!' };
		//JSX reference
		{buttonText}
		//yields error "OBJECTS ARE NOT VALID AS A REACT CHILD"
			//WE CANNOT TAKE A JS OBJECT AND REFERENCE IT INSIDE OF JSX - SPECIFICALLY WHERE WE WOULD
			//NORMALLY SHOW TEXT

		//JS var
		const buttonText = { text: 'Click me!' };
		//CORRECTED JSX reference
		{buttonText.text}

		//We CAN use JS objects in JSX but not directly when we're trying to print text.

////////////////////////////////////////////////////////////////////////////////////////////////////
//Error Message:
	//Warning: Invalid DOM property 'for'. Did you mean 'htmlFor'?
		//This is telling us that our label has an attritube name of 'for' and wants us to replace it 
		//with htmlFor
			//this b/c of the worry that browsers would interpret the 'for' as the start of a 'for' loop
				//this reaction is still encoded in the library therefore we need to change it to htmlFor