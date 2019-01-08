# JavaScript Fundamentals

This is a three-part course on the fundamentals of JavaScript. It will teach the basics to build a single-page application from scratch. Topics covered include:

- JavaScript behaviour
- code structuring, functions, objects and closures
- page interaction and modification using jQuery
- Asynchronous programming
- Communication and external storage

## Part 1 - Code structure

### The page

A page is built from three components:
- The page structure (html)
- The page layout (css)
- The page functionality

### Single Page Applications

Basis for working with web pages from a JavaScript perspective is handling each page as a small application. It loads and responds to events. The term "Single Page Application" stems from this.

To demonstrate the flow of an SPA, consider the following piece of code and determine which line(s) are changed to a green color.

```html
<html>
	<head>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
	</head>
	<body>
		<h1>Verkleur ik?</h1>
		<h1>En ik?</h1>
		<h1>Ik toch wel?</h1>
		<script>
			$('h1').css('color','green');
		</script>
		<h1>Nee ik</h1>
		<h1>Nietes</h1>
		<h1>Welles</h1>
	</body>
</html>
```

### JavaScripts quirks and gimmicks

These are the things that can be done using JavaScript:

### Code structure

t.b.d.

## Part 2 - Page interaction

t.b.d.

## Part 3 - Communication

t.b.d.